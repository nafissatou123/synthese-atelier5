<h2>Compte rendu de l'atelier pratique n'5</h2>
<h3>Titre : Développement d'un Chat Boot RAG Spring React</h3>
<h2>Objectifs :</h2>
<p>Développer une application web fullstack Spring React qui permet mettre en oeuvre un Chat Bot Basé sur un système RAG avec les LLMs llama3 et openAI. L'application utilise Spring AI coté backend et React coté Frontend en utilisant VAADIN.</p>

<h3>ÉTAPE 1</h3>
<p>Crée une application full stack basée sur spring AI et React qui permet de chatter avec un LLM Open AI et Llama</p>
<p>Dans notre cas utilisation de ollama avec le model llama3</p>
<p>Page d'accueil</p>
<img src="captures/home.jpg" alt="image 12"/>
<p>Page de chat</p>
<img src="captures/chat.jpg" alt="image 13"><br>

<h3>ÉTAPE 2</h3>
<p>Mettre en place un Vector store (Simple Vector Store) permettant de vectoriser des documents PDF en utilisant un modèle Embeeding (Llama3)</p>
<p>Utilisation du cv personnel : question 1</p>
<img src="captures/4.jpg" alt="image 3"><br><br>
<p>Utilisation du cv personnel : la question posée en francais combine prénom et nom. donc on va la poser en anglais pour eviter la confusion</p>
<img src="captures/2.jpg" alt="image 4"><br><br>
<p>Utilisation du cv personnel : Sous format json</p>
<img src="captures/2.1.jpg" alt="image 5"><br><br>
<p>Utilisation du cv personnel : question hors context il enverra un message défini par defaut</p>
<img src="captures/1.jpg" alt="image 6"><br><br>

<h3>ÉTAPE 3</h3>
<p> Développer le Chatbot en exploitant le système Retrieval Augmented Generation</p>
<p>Cette étape consiste à rechercher des informations pertinentes à partir d'une base de données, d'un ensemble de documents, ou d'autres sources de connaissances</p>
<p>Dans notre cas on utilisera encore le cv et on lui posera des questions assez complexes avec une base de données postgres docker</p>
<p>Execution de docker</p>
<img src="captures/docker.jpg" alt="docker ">
<p>Creation de la base de données avec la table vector_store</p>
<img src="captures/5.jpg" alt="bd ">
<p>Creation de la base de données avec la table vector_store</p>
<img src="captures/10.jpg" alt="image 7 ">


<h3>ÉTAPE 4</h3>
<p>Migrer le vectore store vers Pg Vector Store</p>
<p>Migration et stockage des données dans la base de données</p>
<img src="captures/11.jpg" alt="image 8"/>

<h3>ÉTAPE 5</h3>
<p>Ajouter d'autres Fonctionnalités supplémentaires au projet</p>
<p>Creation d'une page permettant la création et le stockage dans une base de données de personnes</p>
<p>Table person</p>
<img src="captures/6.jpg" alt="image 9"/>
<p>Ajout d'une nouvelle personne</p>
<img src="captures/7.jpg" alt="image 10"/>
<img src="captures/8.jpg" alt="image 11"/>
<p>Fonctionnalité de recherche</p>
<img src="captures/9.jpg" alt="image 10"/>

<h3>FIN</h3>