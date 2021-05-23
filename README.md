# VoiceCoachReact
Realtime AI Voice Coach is the ReactJS web application that can stream microphone audio from the browser
to a NodeJS server and transmit the DeepSpeech results back to the browser.  


## Setup  
To launch to Realtime AI Voice Coach to your local machine, you need to do set up the following
### 1. Download the GitHub repository to your local machine
In our github repository, you can either download the zip file or open with GitHub Desktop.

### 2. Download the following pre-trained models through [Mozilla DeepSpeech](https://github.com/mozilla/DeepSpeech/releases/tag/v0.9.3):
* deepspeech-0.9.3-models.pbmm
* deepspeech-0.9.3-models.scorer
##### You need to move these 2 files into the VoiceCoachReact file on you local machine.

### 3. Install Node js
Download the correct version of [node.js](https://nodejs.org/en/download/)

### 4. Install npm and yarn
##### Search Terminal(Mac) / Command Prompt(Windows), copy the following prompt line by line and hit enter to install

```
npm install
```
```
yarn install
```
---
## Run the Website
### 1. Open 
##### You need to open TWO Terminal(Mac) / Command Prompt(Windows) windows

### 2. Go to the directory of the VoiceCoachReact file
The following is the example if your VoiceCoachReact file on you local machine is in Downloads
```
cd Downloads/VoiceCoachReact
```

### 3. Run ReactJS Client website
On one of the terminal / command prompt, run ReactJS Client to start the website:
```
yarn start
```

### 4. Run NodeJS Server
On another terminal / command prompt, Run NodeJS Server to activate the server to interact with the client website:

```
node server.js
```

### 5. Remember to TURN ON you microphone

---
## Overview of the VoiceCoachReact file
* server: server.js in VoiceCoachReact
* The UI(User Interface) with html, css, JavaScript in VoiceCoachReact/src
* .pbmm and .scorer are the DeepSpeech pre-trained model
---
## Additional / Further Infomation
* [Train your own model with DeepSpeech](https://deepspeech.readthedocs.io/en/v0.9.3/TRAINING.html)
* [DeepSpeech Documentation](https://deepspeech.readthedocs.io/en/v0.9.3/?badge=latest)

