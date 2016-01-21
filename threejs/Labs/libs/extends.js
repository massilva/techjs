var DefaultRenderer = (function(){
	function DefaultRenderer(){
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	    this.renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);
	};
	return DefaultRenderer;
})();