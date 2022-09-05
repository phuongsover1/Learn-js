'use strict';

(function() {
	console.log('This will nerver run again!');
})();

(() => console.log('This ALSO never run again!'))();
