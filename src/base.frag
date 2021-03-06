varying vec3 pos;
varying vec2 UVs;

uniform vec3 color;
uniform float opacity;

uniform float fadeNear;
uniform float fadeFar;
uniform float fadeParam;

uniform bool isTex;
uniform sampler2D tex;

/* Main fragment shader function */
void main( void ) {
  if (isTex)
    gl_FragColor = vec4(vec3(texture2D(tex, UVs)), pow(1.0 - (length(pos) - fadeNear) / (fadeFar - fadeNear), fadeParam));
  else
    gl_FragColor = vec4(color, opacity * pow(1.0 - (length(pos) - fadeNear) / (fadeFar - fadeNear), fadeParam));
} /* End of 'main' function */
