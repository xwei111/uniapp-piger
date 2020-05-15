import Vue from 'vue';
import com from './self-task-color.vue';

let MyMessage = Vue.extend(com);
let Message = {};

Message.showModel = (options) => {
	if(typeof options === "string") {
		options = { color: options }
	}
	let myMessage = new MyMessage({
		data: options
	})
	myMessage.$mount()
	document.body.appendChild(myMessage.$el)
}

export default Message