(function init(){

    var camera = new THREE.OrthographicCamera(-1.0, 1.0, 1.0, -1.0, -1.0, 1.0);
    var renderer = new DefaultRenderer().renderer; //Instanciando renderer com valores padrao.
    var geometry;

    var scene = new THREE.Scene();
    scene.add(camera);

    var lines = new Array;
    var step = -0.5;
    var nLines = 0, tLines = Math.abs(1 / step) + 2;

    var intervalId = setInterval(changeLine, 1000); // A cada 1 sec muda a linha

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    initGeometry();

    var line = new THREE.Line(geometry);    

    function changeLine(){
        if(nLines === 0){
            initGeometry();
            line.position.set(0,0,0);
        }
        line.translateY(step);
        scene.add(line);
        nLines = (nLines + 1) % tLines;
        renderer.clear();
        renderer.render(scene, camera);
    }

    function initGeometry(){
        geometry = new THREE.Geometry();
        geometry.vertices.push( 
                                new THREE.Vector3( -1.0,  1.0, 0.0 ),
                                new THREE.Vector3( -0.5,  0.0, 0.0 ),
                                new THREE.Vector3(  0.0,  1.0, 0.0 ),
                                new THREE.Vector3(  0.5,  0.0, 0.0 ),
                                new THREE.Vector3(  1.0,  1.0, 0.0 )
                            );        
    }

})();