(function init(){

    var camera = new THREE.OrthographicCamera(-1.0, 1.0, 1.0, -1.0, -1.0, 1.0);
    var renderer = new DefaultRenderer().renderer; //Instanciando renderer com valores padrao.

    var lines = new Array;
    var nLines = 0, tLines = 3;

    var intervalId = setInterval(changeLine, 1000); // A cada 1 sec muda a linha

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    function changeLine(){ 

        var geometry = new THREE.Geometry();
        var scene = new THREE.Scene();

        scene.add(camera);

        if(nLines === 0){

            geometry.vertices.push( 
                                    new THREE.Vector3( -1.0,  1.0, 0.0 ),
                                    new THREE.Vector3( -0.5,  0.0, 0.0 ),
                                    new THREE.Vector3(  0.0,  1.0, 0.0 ),
                                    new THREE.Vector3(  0.5,  0.0, 0.0 ),
                                    new THREE.Vector3(  1.0,  1.0, 0.0 )
                                    );
            var line = new THREE.Line(geometry);    
            scene.add(line);

        }else if(nLines === 1 || nLines === 2){
            
            geometry.vertices.push(    
                                    new THREE.Vector3( -1.0,  0.75, 0.0 ),
                                    new THREE.Vector3( -0.5, -0.25, 0.0 ),
                                    new THREE.Vector3(  0.0,  0.75, 0.0 ),
                                    new THREE.Vector3(  0.5, -0.25, 0.0 ),
                                    new THREE.Vector3(  1.0,  0.75, 0.0 )
                                    );
            
            if(nLines === 1){
                var material = new THREE.LineBasicMaterial({color:0xff0000});
                var line = new THREE.Line(geometry, material);
                scene.add(line);   
            }else if(nLines === 2){
                geometry.colors.push(  
                                        new THREE.Color(1.0, 1.0, 1.0),
                                        new THREE.Color(1.0, 1.0, 0.0),
                                        new THREE.Color(1.0, 0.0, 0.0),
                                        new THREE.Color(0.0, 1.0, 0.0),
                                        new THREE.Color(0.0, 1.0, 1.0)
                                        );            
                var Tmaterial = new THREE.LineBasicMaterial( { linewidth: 2.0, color: 0xffffff, vertexColors: THREE.VertexColors });
                var line = new THREE.Line(geometry, Tmaterial);
                line.translateY(-0.5);
                scene.add(line);
            }

        }

        nLines = (nLines + 1) % tLines;
        renderer.clear();
        renderer.render(scene, camera);

    }

})();