let http = require("https");
let Promise = require("promise");

function endpoint(path) {
	return "https://hacker-news.firebaseio.com/v0/" + path;
}

function request(url, callback) {
	http.get(url, (res) => {
		var data = "";
		res.on("data", (d) => {
			data += d;
		});
		res.on("end", () => {
			callback(data);
		});
	})
}

function newStories(amount) {
	return new Promise((resolve, reject) => {
		request(endpoint("newstories.json"), (data) => {
			var stories = JSON.parse(data);
			if (amount) {
				stories = stories.splice(0, amount);
			}
			resolve(stories);
		});
	});
}

function topStories(amount) {
	return new Promise((resolve, reject) => {
		request(endpoint("topstories.json"), (data) => {
			var stories = JSON.parse(data);
			if (amount) {
				stories = stories.splice(0, amount);
			}
			resolve(stories);
		});
	});
}

function bestStories(amount) {
	return new Promise((resolve, reject) => {
		request(endpoint("beststories.json"), (data) => {
			var stories = JSON.parse(data);
			if (amount) {
				stories = stories.splice(0, amount);
			}
			resolve(stories);
		});
	})
}

function askStories(amount) {
	return new Promise((resolve, reject) => {
		request(endpoint("askstories.json"), (data) => {
			var stories = JSON.parse(data);
			if (amount) {
				stories = stories.splice(0, amount);
			}
			resolve(stories);
		});
	});
}

function showStories(amount) {
	return new Promise((resolve, reject) => {
		request(endpoint("showstories.json"), (data) => {
			var stories = JSON.parse(data);
			if (amount) {
				stories = stories.splice(0, amount);
			}
			resolve(stories);
		});
	});
}

function jobStories(amount) {
	return new Promise((resolve, reject) => {
		request(endpoint("jobstories.json"), (data) => {
			var stories = JSON.parse(data);
			if (amount) {
				stories = stories.splice(0, amount);
			}
			resolve(stories);
		});
	});
}

function item(id) {
	return new Promise((resolve, reject) => {
		request(endpoint("item/" + id + ".json"), (data) => {
			let result = JSON.parse(data);
			if (result == null) {
				reject();
			} else {
				resolve(result);
			}
		});
	});
}

function user(name) {
	return new Promise((resolve, reject) => {
		request(endpoint("user/" + name + ".json"), (data) => {
			let result = JSON.parse(data);
			if (result == null) {
				reject();
			} else {
				resolve(result);
			}
		});
	});
}

module.exports = {
	new: newStories,
	top: topStories,
	best: bestStories,
	ask: askStories,
	show: showStories,
	job: jobStories,
	item: item,
	user: user
};