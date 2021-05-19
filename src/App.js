import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import MainFunction from "./MainFunction";

function App() {
	return (
		<div>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/about" exact component={() => <About />} />
					<Route path="/contact" exact component={() => <Contact />} />
					<Route path="/mainfunction" exact component={() => <MainFunction />} />
				</Switch>
				<Footer />
			</Router>

		</div>
	);
}
//added

//import { Navigation, Footer, Home, About, Contact } from "./components";

/*
const DOWNSAMPLING_WORKER = './downsampling_worker.js';




class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			connected: false,
			recording: false,
			recordingStart: 0,
			recordingTime: 0,
			recognitionOutput: [],
			// added
			totalTime: 0.0,
			startTime: 0.0,
			endTime: 0.0,

			// new added
			totalDur: 0.0,
			totalWord: 0

		};
	}
	
	componentDidMount() {
		

		let recognitionCount = 0;
		
		this.socket = io.connect('http://localhost:4000', {});
		
		this.socket.on('connect', () => {
			console.log('socket connected');
			this.setState({connected: true});
		});
		
		this.socket.on('disconnect', () => {
			console.log('socket disconnected');
			this.setState({connected: false});
			this.stopRecording();
		});
		
		this.socket.on('recognize', (results) => {
			console.log('recognized:', results);
			const {recognitionOutput} = this.state;
			results.id = recognitionCount++;
			recognitionOutput.unshift(results);
			this.setState({recognitionOutput});
		});
	}

	// route: when you click button home --> give you to the certain path to the components
	// UI===================================
	render() {
		return (<div className="App">
			<div>
				<Router>
					<Navigation />
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/about" exact component={() => <About />} />
						<Route path="/contact" exact component={() => <Contact />} />
					</Switch>
					<Footer />
				</Router>

				<button disabled={!this.state.connected || this.state.recording} onClick={this.startRecording}>
					Start Recording
				</button>
				
				<button disabled={!this.state.recording} onClick={this.stopRecording}>
					Stop Recording
				</button>
				
				{this.renderTime()}
			</div>
			{this.renderRecognitionOutput()}
			{this.renderOutputLength()}
			{this.duration()}
			{this.rateOfSpeech()}
			<p>===========================</p>
			
			<br></br>
		</div>);
	}
	
	renderTime() {
		return (<span>
			{(Math.round(this.state.recordingTime / 100) / 10).toFixed(1)}s
		</span>);
	}
	
	//added function** num words
	renderOutputLength() {
		return (<ul>
			{this.state.recognitionOutput.map((r) => {
				return (<p key={r.id}>Word: {r.text.split('@')[0].split(' ').length}</p>);//(<li key={r.id}>{r.text}</li>);
			})}
		</ul>)
	}

	// new added
	rateOfSpeech() {
		return (<ul>
			{this.state.recognitionOutput.map((r) => {
				return (<p key={r.id}>Rate: {parseInt(r.text.split('@')[2])}</p>);//(<li key={r.id}>{r.text}</li>);
			})}
		</ul>)
	}


	//added function**
	duration()
	{

		//new dur
		return (<ul>
			{this.state.recognitionOutput.map((r) => {
				return (<p key={r.id}>Duration: {parseFloat(r.text.split('@')[1])}</p>);//(<li key={r.id}>{r.text}</li>);
			})}
		</ul>)
		/*
		if(!this.state.recording)
		{
			var dur = this.state.endTime - this.state.startTime;
			var sec = dur / 1000;
			this.state.totalTime += sec;
			return (<p>   dur: {sec}</p>);
		}

	}


	totalDuration()
	{
		return (<p>   totalTime: {this.state.totalTime}</p>);
	}


	renderRecognitionOutput() {
		return (<ul>
			{this.state.recognitionOutput.map((r) => {
				return (<p key={r.id}>{r.text.split('@')[0]}</p>);//(<li key={r.id}>{r.text}</li>);
			})}
		</ul>)
	}
	
	createAudioProcessor(audioContext, audioSource) {
		let processor = audioContext.createScriptProcessor(4096, 1, 1);
		
		const sampleRate = audioSource.context.sampleRate;
		
		let downsampler = new Worker(DOWNSAMPLING_WORKER);
		downsampler.postMessage({command: "init", inputSampleRate: sampleRate});
		downsampler.onmessage = (e) => {
			if (this.socket.connected) {
				this.socket.emit('stream-data', e.data.buffer);
			}
		};
		
		processor.onaudioprocess = (event) => {
			var data = event.inputBuffer.getChannelData(0);
			downsampler.postMessage({command: "process", inputFrame: data});
		};
		
		processor.shutdown = () => {
			processor.disconnect();
			this.onaudioprocess = null;
		};
		
		processor.connect(audioContext.destination);
		
		return processor;
	}

	

	startRecording = e => {
		//added
		this.state.startTime = new Date().getTime();

		if (!this.state.recording) {
			this.recordingInterval = setInterval(() => {
				let recordingTime = new Date().getTime() - this.state.recordingStart;

				this.setState({recordingTime});
			}, 100);
			
			this.setState({
				recording: true,
				recordingStart: new Date().getTime(),
				recordingTime: 0
			}, () => {
				this.startMicrophone();
			});
		}
	};
	
	startMicrophone() {
		this.state.startTime = new Date().getTime();
		this.audioContext = new AudioContext();
		
		const success = (stream) => {
			console.log('started recording');
			this.mediaStream = stream;
			this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
			this.processor = this.createAudioProcessor(this.audioContext, this.mediaStreamSource);
			this.mediaStreamSource.connect(this.processor);
		};
		
		const fail = (e) => {
			console.error('recording failure', e);
		};
		
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({
				video: false,
				audio: true
			})
			.then(success)
			.catch(fail);
		}
		else {
			navigator.getUserMedia({
				video: false,
				audio: true
			}, success, fail);
		}
	}
	
	stopRecording = e => {
		//added
		this.state.endTime = new Date().getTime();
		if (this.state.recording) {
			if (this.socket.connected) {
				this.socket.emit('stream-reset');
			}
			clearInterval(this.recordingInterval);
			this.setState({
				recording: false
			}, () => {
				this.stopMicrophone();
			});
		}
	};
	
	stopMicrophone() {
		if (this.mediaStream) {
			this.mediaStream.getTracks()[0].stop();
		}
		if (this.mediaStreamSource) {
			this.mediaStreamSource.disconnect();
		}
		if (this.processor) {
			this.processor.shutdown();
		}
		if (this.audioContext) {
			this.audioContext.close();
		}
	}
}
*/
export default App;