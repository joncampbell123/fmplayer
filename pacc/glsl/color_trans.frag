uniform sampler2D palette;
uniform sampler2D tex;
FRAG_IN mediump vec2 texcoord;
uniform lowp float color;
FRAGCOLOR_DECL
void main(void) {
  lowp float index = TEXTURE2D(tex, texcoord).x;
  if (index < (0.5/255.0)) {
    discard;
  }
  FRAGCOLOR = TEXTURE2D(palette, vec2(color, 0.0));
}
