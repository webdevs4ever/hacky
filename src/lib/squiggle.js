// Blocks tracing a cubic bezier "S", snapped to a 14px grid.
// Generated from control points [(2,15),(15,13),(0,4),(13,1)] — regenerate
// rather than hand-editing if you want a different curve.
export const CELL = 14;

export const CURVE = [
  [28, 210], [42, 210], [56, 210], [56, 196], [70, 196], [84, 196],
  [84, 182], [98, 182], [98, 168], [112, 168], [112, 154], [112, 140],
  [112, 126], [112, 112], [98, 112], [98, 98], [98, 84], [98, 70],
  [98, 56], [112, 56], [112, 42], [126, 42], [126, 28], [140, 28],
  [154, 28], [154, 14], [168, 14], [182, 14],
];

// Arrowhead at the top-right terminus.
export const ARROW = [[196, 14], [182, 0], [182, 28]];

// Loose scatter of small squares for atmosphere. Hero only.
export const SPECKS = [
  [196, -14], [40, 150], [176, 112], [60, 60], [200, 182], [146, 222],
];

export const VIEW_BOX = "14 -20 210 262";
