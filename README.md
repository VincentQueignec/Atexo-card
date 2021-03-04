# Atexo-card
Atexo card test

## Task :
On souhaite développer un jeu de cartes.<br/>
Dans ce jeu, un joueur tire une main de 10 cartes de manière aléatoire.<br/>
Chaque carte possède une couleur ("Carreaux", par exemple) et une valeur ("10", par exemple).<br/>
On vous demande de:<br/>
Construire un ordre aléatoire des couleurs. L'ordre des couleurs est, par exemple, l'un des suivants :<br/>
--> Carreaux, Coeur, Pique, Trèfle<br/>
Construire un ordre aléatoire des valeurs. L'ordre des valeurs est, par exemple, l'un des suivants :<br/>
--> AS, 5, 10, 8, 6, 5, 7, 4, 2, 3, 9, Dame, Roi, Valet<br/>
Construire une main de 10 cartes de manière aléatoire.<br/>
Présenter la main "non triée" à l'écran puis la main triée selon n'importe quel ordre défini dans la 1ère et 2ème étape. <br/>
C'est-à-dire que vous devez classer les cartes par couleur et valeur.<br/>
Vous présenterez une solution qui tourne sur le langage Java/Spring.<br/>
Vous pouvez utiliser un serveur d'application pour présenter la main de l'utilisateur (une interface graphique est la bienvenue),<br/> ou simplement la sortie console.<br/>

## Frontend

Install ng cli

```shell
npm install -g @angular/cli
```

Get to the angular folder (cardTest/cardApp) and run ng serve
```shell
ng serve
```

## Testing

Backend (unit and integration tests)
```shell
mvm test
```

Frontend
```shell
ng test
```

## Worth noting
The sorting algo is front sided for mainly 2 reasons: <br/>
* Reducing the payload of the server since the sorting isn't critical (server doesn't have to check the process)
* Remove a server-side complexity (session or any other storage solution)

## Screenshot

![screeshot](https://github.com/VincentQueignec/Atexo-card/blob/master/Capture-atexo.PNG?raw=true)