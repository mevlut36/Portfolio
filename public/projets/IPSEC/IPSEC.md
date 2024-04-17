## Configuration d'un VPN IPsec Site-à-Site entre deux routeurs Cisco

### Objectif

Mettre en place un VPN IPsec Site-à-Site entre deux sites pour sécuriser la communication entre eux.

![Maquette Packet Tracer](/projets/IPSEC/IPSEC-Illustration.png)

### Pré-requis

- Deux routeurs Cisco.

### Activer la license

Dans un premier temps, il se peut que votre routeur ne prend pas en charge le protocole
IPSEC. C’est sûrement parce que vous n’avez pas ajouter la licence securityk9.

Pour l'activer:

```cisco
Router#configure terminal
Router(config)#license boot module c2900 technology-package securityk9
```

Les routeurs 4300, 1841, 1240, 800 ont la licence securityk9 par défaut sur Packet Tracer.

Puis sauvegarder la configuration. **Les changements seront appliqués après le redémarrage.**

```cisco
Router(config)#end
Router#write memory
Router#reload
```

Vous pouvez le vérifier avec show version pour voir si le package **securityk9** est activé.

### Définition des phases ISAKMP (phase 1) et IPsec (phase 2)

Pour configurer le VPN Site à Site il faut passer par deux phases.

**La phase 1**: Cette phase établit une connexion sécurisée entre les deux routeurs. Elle utilise le protocole ISAKMP pour négocier et établir une association de sécurité (SA).

L'objectif est d'authentifier les deux pairs et de s'entendre sur un ensemble de paramètres de sécurité pour protéger les données.

```cisco
Router(config)#crypto isakmp policy 10
Router(config-crypto)#encr aes 256
Router(config-crypto)#authentication pre-share
Router(config-crypto)#group 2
Router(config-crypto)#lifetime 86400
```

**La Phase 2**: Après l'établissement de la phase 1, la phase 2 commence est responsable de l'établissement des SAs IPsec qui chiffreront les données.

```cisco
crypto ipsec transform-set TSET esp-aes esp-sha-hmac
```

Un "transform-set" spécifie comment le trafic sera chiffré et authentifié. Vous pouvez choisir parmi différents algorithmes de chiffrement et d'authentification.

Ici, le chiffrement AES avec une clé de 256 bits est utilisé, et l'authentification utilise HMAC avec SHA.

### Définition des adresses réseau pour chaque site

Nous allons déterminer les réseaux que vous souhaitez connecter via le VPN.
Exemple :

- Site A : 192.168.10.0/24
- Site B : 192.168.20.0/24

### Configuration des ACLs pour définir le trafic

L'ACL est utilisée pour déterminer quel trafic doit être envoyé via le tunnel VPN (trafic intéressant). Tout trafic correspondant à cette ACL sera chiffré et envoyé à travers le tunnel VPN.

```cisco
ip access-list extended VPN permit ip 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255
```

### Configuration de l'interface

Configurez l'interface qui sera connectée à Internet ou à un autre WAN pour accepter le trafic VPN.

```cisco
Router(config)#interface GigabitEthernet0/0
Router(config-if)#ip address 1.1.1.1 255.255.255.0
```

### Configuration de la cryptomap

Une fois tous les éléments précédents configurés, ils doivent être liés ensemble à l'aide d'une "cryptomap". La cryptomap détermine où envoyer le trafic (à quel pair distant), quels transform-sets utiliser, et quelle ACL détermine le trafic à chiffrer.

```
Router(config)#crypto map MY_CRYPTO_MAP 10 ipsec-isakmp
Router(config-crypto)#set peer 2.2.2.2
Router(config-crypto)#set transform-set MY_TRANSFORM_SET
Router(config-crypto)#match address VPN
```

Cette cryptomap est ensuite appliquée à **l'interface externe** pour activer le VPN:

```cisco
Router(config)#interface GigabitEthernet0/0
Router(config-if)#crypto map MY_CRYPTO_MAP
```

### Exemple de configuration

Voici un exemple de configuration d'un VPN site-à-site entre deux routeurs, avec un troisième routeur jouant le rôle d'"Internet".

![Maquette Packet Tracer](/projets/IPSEC/Maquette.png)

Routeur A (Site Rouen):

- Adresse LAN : 192.168.10.0 /24
- Adresse WAN : 172.16.133.253 /24

Routeur B (Site Avignon):

- Adresse LAN : 192.168.20.0 /24
- Adresse WAN : 172.16.134.253 /24

Routeur "Internet":

- Adresse vers le routeur A : 172.16.133.254
- Adresse vers le routeur B : 172.16.134.254

### Configuration du routeur « Internet »

```cisco
interface GigabitEthernet0/0
 ip address 172.16.133.254 255.255.255.0
!
interface GigabitEthernet0/1
 ip address 172.16.134.254 255.255.255.0
!
ip route 192.168.10.0 255.255.255.0 172.16.133.254
ip route 192.168.20.0 255.255.255.0 172.16.134.254
```

### Configuration du routeur A « Rouen »

```cisco
! Configuration ISAKMP (Phase 1)
crypto isakmp policy 1
 encr aes
 authentication pre-share
 group 2
crypto isakmp key SECRETKEY address 172.16.134.253
! Configuration IPsec (Phase 2)
crypto ipsec transform-set TSET esp-aes esp-sha-hmac
! ACL pour le trafic VPN
access-list 101 permit ip 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255
! Cryptomap
crypto map CMAP 1 ipsec-isakmp
 set peer 172.16.134.253
 set transform-set TSET
 match address 101
! Application de la cryptomap sur l'interface WAN
interface GigabitEthernet0/0
 ip address 172.16.133.253 255.255.255.0
 crypto map CMAP
! Routes statiques
ip route 192.168.20.0 255.255.255.0 172.16.133.254
ip route 172.16.134.0 255.255.255.0 172.16.133.254
```

### Configuration du routeur B « Avignon »

```cisco
! Configuration ISAKMP (Phase 1)
crypto isakmp policy 1
 encr aes
 authentication pre-share
 group 2
crypto isakmp key SECRETKEY address 172.16.133.253
! Configuration IPsec (Phase 2)
crypto ipsec transform-set TSET esp-aes esp-sha-hmac
! ACL pour le trafic VPN
access-list 101 permit ip 192.168.20.0 0.0.0.255 192.168.10.0 0.0.0.255
! Cryptomap
crypto map CMAP 1 ipsec-isakmp
 set peer 172.16.133.253
 set transform-set TSET
 match address 101
! Application de la cryptomap sur l'interface WAN
interface GigabitEthernet0/0
 ip address 172.16.134.253 255.255.255.252
 crypto map CMAP
! Routes statiques
ip route 192.168.10.0 255.255.255.0 172.16.134.254
ip route 172.16.133.0 255.255.255.252 172.16.134.254
```

### Vérification

Après avoir configuré les deux routeurs, vérifiez l'état du tunnel:

```cisco
# show crypto isakmp sa
# show crypto ipsec sa
```

### NAT PAT

Il se peut que les machines des réseaux n'arrivent pas à ping Internet. Cela peut être résolu grâce au NAT PAT. Dans notre infrastructure, les deux sites sont reliés via le réseau 172.16.133.0 et 172.16.134.0 et les IP privées doivent être traduites en adresse IP publique.

**Routeur Rouen**:

```cisco
Router#configure terminal

! Désigner les interfaces intérieur et extérieur
Router(config)#interface g0/1
Router(config-if)#ip nat inside
Router(config-if)#exit
Router(config)#interface g0/0
Router(config-if)#ip nat outside

! Création des ACL
Router(config-if)#access-list 101 permit 192.168.10.0 0.0.0.255
Router(config-if)#access-list 101 permit 192.168.30.0 0.0.0.255
Router(config-if)#exit

! Assigner à l'interface WAN (G0/0) le NAT PAT et l'ACL
Router(config)#ip nat inside source list 101 interface Gi0/0 overload
```

**Routeur Avignon**:

```cisco
Router#configure terminal

! Désigner les interfaces intérieur et extérieur
Router(config)#interface g0/1
Router(config-if)#ip nat inside
Router(config-if)#exit
Router(config)#interface g0/0
Router(config-if)#ip nat outside

! Création des ACL
Router(config-if)#access-list 101 permit 192.168.20.0 0.0.0.255
Router(config-if)#exit

! Assigner à l'interface WAN (G0/0) le NAT PAT et l'ACL
Router(config)#ip nat inside source list 101 interface Gi0/0 overload
```
