let hn = require("./index");

exports.testBestStories = (test) => {
	hn.best()
		.done((stories) => {
			test.ok(typeof stories[0] == "number");
			test.done();
		});
};

exports.testNewStories = (test) => {
	hn.new()
		.done((stories) => {
			test.ok(typeof stories[0] == "number");
			test.done();
		});
};

exports.testTopStories = (test) => {
	hn.top()
		.done((stories) => {
			test.ok(typeof stories[0] == "number");
			test.done();
		});
};

exports.testAsk = (test) => {
	hn.ask()
		.done((stories) => {
			test.ok(typeof stories[0] == "number");
			test.done();
		});
}

exports.testShow = (test) => {
	hn.show()
		.done((stories) => {
			test.ok(typeof stories[0] == "number");
			test.done();
		});
}

exports.testJob = (test) => {
	hn.job()
		.done((stories) => {
			test.ok(typeof stories[0] == "number");
			test.done();
		});
}

exports.testStory = (test) => {
	hn.item(8863)
		.done((item) => {
			test.ok(typeof item.by == "string");
			test.ok(typeof item.descendants == "number");
			test.ok(typeof item.id == "number");
			test.ok(Array.isArray(item.kids));
			test.ok(typeof item.score == "number");
			test.ok(typeof item.time == "number");
			test.ok(typeof item.title == "string");
			test.equal(item.type, "story");
			test.ok(typeof item.url == "string");
			test.done();
		});
};

exports.testComment = (test) => {
	hn.item(2921983)
		.done((item) => {
			test.ok(typeof item.by == "string");
			test.ok(typeof item.id == "number");
			test.ok(Array.isArray(item.kids));
			test.ok(typeof item.parent == "number");
			test.ok(typeof item.text == "string");
			test.ok(typeof item.time == "number");
			test.equal(item.type, "comment");
			test.done();
		});
};