
          window.__NEXT_REGISTER_PAGE('/13/three-shader', function() {
            var comp = module.exports=webpackJsonp([7],{230:function(e,t,r){e.exports=r(231)},231:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(102),s=i(n),a=r(3),o=i(a),u=r(4),l=i(u),h=r(103),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(h),m=function(){function e(t,r){var i=this;(0,o.default)(this,e),this.mousemove=function(e){i.uniforms.mouse.value.x=e.offsetX-i.renderer.domElement.offsetLeft,i.uniforms.mouse.value.y=e.offsetY-i.renderer.domElement.offsetTop},this.resize=function(){var e=[i.canvas.clientWidth,i.canvas.clientHeight],t=e[0],r=e[1];i.renderer.setSize(t,r),i.targets.forEach(function(e){return e.setSize(t/i.ratio,r/i.ratio)}),i.uniforms.resolution.value.x=t/i.ratio,i.uniforms.resolution.value.y=r/i.ratio},this.animate=function(){i.frame++,i.isPlaying&&(setTimeout(i.animate,30),i.frame%i.skip==0&&i.render())},this.ratio=t,this.skip=r,this.scene=new f.Scene,this.camera=new f.OrthographicCamera(-1,1,1,-1,.1,10),this.camera.position.set(0,0,1),this.camera.lookAt(this.scene.position),this.targets=[new f.WebGLRenderTarget(0,0,{minFilter:f.LinearFilter,magFilter:f.NearestFilter,format:f.RGBAFormat}),new f.WebGLRenderTarget(0,0,{minFilter:f.LinearFilter,magFilter:f.NearestFilter,format:f.RGBAFormat})],this.start=Date.now(),this.uniforms={backBuffer:{type:"t",value:new f.Texture},mouse:{type:"v2",value:new f.Vector2},resolution:{type:"v2",value:new f.Vector2},time:{type:"f",value:0}},this.textureLoader=new f.TextureLoader,this.callbacks={}}return(0,l.default)(e,[{key:"setCanvas",value:function(e){e&&(this.canvas=e,this.renderer=new f.WebGLRenderer({canvas:e}),this.renderer.setPixelRatio(1/this.ratio),this.resize(),window.addEventListener("resize",this.resize),this.renderer.domElement.addEventListener("mousemove",this.mousemove),this.frame=0,this.animate())}},{key:"loadShader",value:function(e){this.plane&&this.scene.remove(this.plane);var t=new f.PlaneGeometry(2,2),r=new f.ShaderMaterial({uniforms:this.uniforms,vertexShader:"\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:e,extensions:{derivatives:!0,drawBuffers:!1,fragDepth:!1,shaderTextureLOD:!1}});this.plane=new f.Mesh(t,r),this.scene.add(this.plane)}},{key:"loadTexture",value:function(e){e&&(this.uniforms.texture={type:"t",value:this.textureLoader.load(e)})}},{key:"addUniform",value:function(e,t){this.uniforms[e]={type:"f",value:t()},this.callbacks[e]=t}},{key:"play",value:function(){this.isPlaying=!0,this.animate()}},{key:"stop",value:function(){this.isPlaying=!1}},{key:"render",value:function(){var e=this;this.uniforms.time.value=(Date.now()-this.start)/1e3,this.targets=[this.targets[1],this.targets[0]],this.uniforms.backBuffer.value=this.targets[0].texture,(0,s.default)(this.callbacks).forEach(function(t){e.uniforms[t].value=e.callbacks[t]()}),this.renderer.render(this.scene,this.camera),this.renderer.render(this.scene,this.camera,this.targets[1],!0)}},{key:"aspect",get:function(){return this.renderer.domElement.width/this.renderer.domElement.height}}]),e}();t.default=m}},[230]);
            return { page: comp.default }
          })
        