IONIC 101
========
Create mobile apps with the web technologies you love.

This project aims to introduce some basic concepts of Ionic Framework through a Todo mobile application.

### Prerequisites
1. You must have a **gitlab.com** account.
2. You must have installed in your system:
   - `npm` > https://www.npmjs.com/get-npm
   - `git` > https://www.atlassian.com/git/tutorials/install-git
   - `bower` > `npm install -g bower`

## Step 0 : créer et pousser le projet
1. Créer un repository mytodo sur gitlab.com.
2. Executer les commandes suivantes :

```
$ mkdir ionic & cd ionic
$ ionic start --appname MyTodo mytodo --template blank
$ cd mytodo
$ git init
$ echo .editorconfig >> .gitignore
$ git add .
$ git commit -m "init ionic project"
$ git remote add origin git@gitlab.com:[votre_user]/mytodo.git
$ git push -u origin master 
```
`ionic start [options] <PATH> [template]`<br>
Cette commande permet de créer un projet ionic. 

## Step 0 bis: voir le projet 
Dans cette partie, nous allons:
1. installer Ionic CLI
```
$ npm install -g ionic
```
`ionic -v` pour connaitre la version installée.<br>
`ionic --help` vous donne toute l'aide du CLI.

2. créer un projet ionic avec `ionic start` (déjà fait cependant dans notre cas)
3. executer notre projet en local pour voir de quoi ça a l'air
 ```
 $ ionic serve
 ```
 `ionic serve -l` pour voir le rendu de l'application mobile sur différentes plateformes.

## Step 1: créer le projet todo
Nous allons à ce niveau créer notre application mobile de todo list. <br>

![app](app.gif)

### Créer le sidemenu

Ionic fournit des composants qui facilitent la mise en place d'un sidemenu dans une application mobile.
```
<ion-side-menus></ion-side-menus>
<ion-side-menu></ion-side-menu>
<ion-side-menu-content></ion-side-menu-content>
```
Dans `index.html`, remplaçons `ion-pane` par `ion-side-menus`
```
<body ng-app="starter">
  <ion-pane>
    <ion-header-bar class="bar-stable">
      <h1 class="title">Ionic Blank Starter</h1>
    </ion-header-bar>
    <ion-content>
    </ion-content>
  </ion-pane>
</body>
```
devient
```
<body ng-app="starter">

  <ion-side-menus>

      <ion-side-menu side="left">
        <ion-header-bar class="bar-assertive">
          <h1 class="title">My Todo</h1>
        </ion-header-bar>
        <ion-content>
          <div class="list">
            <a class="item item-icon-left" href="#/app/new-task" menu-close>
              <i class="icon ion-android-add-circle"></i>
              Add a new task
            </a>
            <a class="item item-icon-left" href="#/app/tasks" menu-close>
              <i class="icon ion-social-buffer"></i>
              All tasks
            </a>
          </div>
        </ion-content>
      </ion-side-menu>

      <ion-side-menu-content>
        <ion-nav-bar class="bar-positive">
          <ion-nav-back-button>
          </ion-nav-back-button>
          <ion-nav-buttons side="left">
            <button class="button button-icon button-clear ion-navicon" menu-toggle="left">
            </button>
          </ion-nav-buttons>
        </ion-nav-bar>
        <ion-nav-view name="menuContent"></ion-nav-view>
      </ion-side-menu-content>

    </ion-side-menus>
    
</body>
```
`<ion-pane></ion-pane>` est un conteneur. Il reçoit le header (`<ion-header-bar></ion-header-bar>`) et le contenu de l'application (`<ion-content></ion-content>`). <br> 
Il est remplaçé par la directive `<ion-side-menus></ion-side-menus>`.