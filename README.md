# PaperHub (M2 SIL - Analyse et architecture logicielle orientée objets)

##### Baptiste CERDAN, Janos FALKE, Thomas STEINMETZ, Victor VOGT 

<p align="center">
  <img src="https://img.shields.io/badge/node-16.14.0-green.svg" />
  <img src="https://img.shields.io/badge/yarn-1.22.17-blue.svg" />
  <img src="https://img.shields.io/badge/paper-0.12.15-critical.svg" />
</p>

## Architecture

### DrawTool
src/tools/draw-tool.ts
    - Outil permettant de selectionner 2 points pour créer une cloison (ligne) entre ces 2 points

### FurnitureTool
src/toolboxes/furniture-toolbox.ts
    - Boite a outil sur la droite pour séléctionner un item à placer

src/tools/furniture-tool.ts
    - Outil pour ouvrir le panel de séléction d'éléments à placer

### Undo/Redo
src/tools/undoredo-toolbox.ts
    - Outil pour retourner en arrière ou en avant
    - Enregistre 10 états du paper et en enregistre un a chaque modification du paper

### Items
src/items/
    - Contient tous les items selectionnables dans le FurnitureTool

src/item/item.ts
    - Contient la classe abstraite pour instancier un item

### Documentation
Peut être créé avec la commande : npx typedoc

## Commandes

### Plans

On dispose de deux plans à choisir en cliquant dans la zone Plans sur le premier outil du dock.

### Cloison

En cliquant sur le deuxième outil du dock, on peux dessiner une cloison. 
- Au premier clic, on place le point de départ de la cloison. 
- Au second, on dessine le trait.
- Au troisième, on valide le cloison.

On peut annuler le premier clic en appuyant sur la touche Echap

On peut supprimer la cloison avant la validation de la cloison en appuyant sur la touche Suppr.

On ne peut pas dessiner un cloison qui intersecte un objet ou une cloison.

### Couleurs

A l'aide du seau dans le dock, on peut choisir la couleur de son choix et remplir les objets de la couleur choisi

### Dessiner des formes

A l'aide du crayon dans le dock, on peut dessiner des formes à notre souhait.

On peut maintenir le clic jusqu'à retourner au point de départ et la forme se remplira en bleu.

### Placer un objet

En cliquant sur le dernier outil du dock, on a une fenètre d'objet sur la droite, en cliquant sur un objet, il apparait sur le plan et on peut déplacer en drag and drop l'objet.

Pour reconnaitre les différents objets, on a une fenêtre sur la gauche où l'on retrouve différentes caractéristiques de l'objet.

En appuyant sur les flèches directionnelles, on peut faire des rotations de l'objet.

En appuyant sur la touche Suppr, on peut supprimer l'objet sélectionné.

### Undo / Redo

La fenêtre Undo / Redo permet d'annuler le dernier changement jusqu'à une limite de 10 changements.

### Sauvegarde / Restaure

La fenêtre Projet permet de sauvegarder l'état en cours ou restaurer le dernier état enregistré.

## Licences

Université de Strasbourg - Master 2 Sciences et Ingénierie du Logiciel - Analyse et architecture logicielle orientée objets - 2021/2022
