const fragmentShader = `varying float qnoise;
varying float noise;
uniform float time;
uniform bool redhell;
uniform float rcolor;
uniform float gcolor;
uniform float bcolor;

void main() {
  float r, g, b;
    r = cos(qnoise + rcolor);
    g = cos(qnoise + (gcolor));
    b = cos(qnoise + bcolor);
  gl_FragColor = vec4(r, g, b, 1.0);
}`;
export default fragmentShader;
