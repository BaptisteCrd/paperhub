# PaperHub

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

## Licences

Université de Strasbourg - Master 2 Sciences et Ingénierie du Logiciel - Analyse et architecture logicielle orientée objets - 2021/2022
