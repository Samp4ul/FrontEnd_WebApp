# FrontEnd_WebApp
TD 1 Web Application ESILV


Goal : Créer une application Web permettant l'affichage, la modification, l'ajout et la suppresions de localisations de lieux de tounarge en limitant l'accès aux seules personnes autorisées.

Back utilisé : celui de Roch Moureau (attention simplement à bien utiliser CORS dans le back, sinon le front ne pourra pas fonctionner)

Users Stories :

- Utilisateurs sans compte : Ne peut accéder qu'aux pages /login et /register. Tout tentative d'accès aux autres pages entrainera une redirection vers la page /login (code 401). Il peut néanmoins créer un compte sur la page /register

- Utilisateurs avec compte (non admin) : Peut se connecter sur la page /login et obtient ainsi un token lui permettant d'accès à la page /locations où seront afficher un bouton 'Log Out' permettant de se déconnecter et la liste des lieux de tournage. En cliquant sur l'id et le nom du film, il peut accéder au détail du lieu de tournage.

- Admin : Peut se connecter sur la page /locations et en plus des lieux, il peut voir un bouton lui permettant d'accèder à la page /add (toute personne non admin se fera rediriger vers la page /login ou /locations en fonction de son statut) qui lui permet d'ajouter un lieu. Sur la page /locations, dans le détail de chaque film, il lui est possible de modifier le détail (à l'exception de l'id et du v). _Il est nécessaire de recharger la page pour voir les modifications_ 
