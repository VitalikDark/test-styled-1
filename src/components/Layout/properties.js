const isNotProd = process.env.NODE_ENV !== 'production';

// NOTE:  https://styled-system.com/table#space
const SpaceProperties = {
  margin: [Number, String, Array],
  m: [Number, String, Array],
  marginTop: [Number, String, Array],
  mt: [Number, String, Array],
  marginRight: [Number, String, Array],
  mr: [Number, String, Array],
  marginBottom: [Number, String, Array],
  mb: [Number, String, Array],
  marginLeft: [Number, String, Array],
  ml: [Number, String, Array],
  marginX: [Number, String, Array],
  mx: [Number, String, Array],
  marginY: [Number, String, Array],
  my: [Number, String, Array],

  padding: [Number, String, Array],
  p: [Number, String, Array],
  paddingTop: [Number, String, Array],
  pt: [Number, String, Array],
  paddingRight: [Number, String, Array],
  pr: [Number, String, Array],
  paddingBottom: [Number, String, Array],
  pb: [Number, String, Array],
  paddingLeft: [Number, String, Array],
  pl: [Number, String, Array],
  paddingX: [Number, String, Array],
  px: [Number, String, Array],
  paddingY: [Number, String, Array],
  py: [Number, String, Array],
};

// NOTE: https://styled-system.com/table#color
const colors = {
  color: [String, Array],
  bg: [String, Array],
  backgroundColor: [String, Array],
  opacity: [String, Array],
};

// NOTE: https://styled-system.com/table#typography
const typography = {
  fontFamily: {
    type: [String, Array],
    validator: (v) => {
      if (isNotProd && v !== 'monospace') {
        throw new Error('Is not allowed change fontFamily');
      }
      return true;
    },
  },
  fontSize: [Number, String, Array],
  fontWeight: [Number, String, Array],
  lineHeight: [Number, String, Array],
  letterSpacing: [Number, String, Array],
  textAlign: [Number, String, Array],
  fontStyle: [Number, String, Array],
};

// NOTE: https://styled-system.com/table#layout
const layouts = {
  width: [Number, String, Array],
  height: [Number, String, Array],
  minWidth: [Number, String, Array],
  maxWidth: [Number, String, Array],
  minHeight: [Number, String, Array],
  maxHeight: [Number, String, Array],
  size: [Number, String, Array],
  display: [String, Array],
  verticalAlign: [String, Array],
  overflow: [String, Array],
  overflowX: [String, Array],
  overflowY: [String, Array],
};

// NOTE: https://styled-system.com/table#flexbox
const flexboxLayouts = {
  alignItems: [String, Array],
  alignContent: [String, Array],
  justifyItems: [String, Array],
  justifyContent: [String, Array],
  flexWrap: [String, Array],
  flexDirection: [String, Array],
  flex: [String, Array],
  flexGrow: [Number, String, Array],
  flexShrink: [Number, String, Array],
  flexBasis: [Number, String, Array],
  justifySelf: [String, Array],
  alignSelf: [String, Array],
  order: [Number, String, Array],
};

// NOTE: https://styled-system.com/table#grid-layout
const gridLayouts = {
  gridGap: [Number, String, Array],
  gridRowGap: [Number, String, Array],
  gridColumnGap: [Number, String, Array],
  gridColumn: [String, Array],
  gridRow: [String, Array],
  gridArea: [String, Array],
  gridAutoFlow: [String, Array],
  gridAutoRows: [String, Array],
  gridAutoColumns: [String, Array],
  gridTemplateRows: [String, Array],
  gridTemplateColumns: [String, Array],
  gridTemplateAreas: [String, Array],
};

// NOTE: https://styled-system.com/table#background
const backgrounds = {
  background: [String, Array],
  backgroundImage: [String, Array],
  backgroundSize: [String, Array],
  backgroundPosition: [String, Array],
  backgroundRepeat: [String, Array],
};

// NOTE: https://styled-system.com/table#border
const borders = {
  border: [String, Array],
  borderWidth: [Number, String, Array],
  borderStyle: [String, Array],
  borderColor: [String, Array],
  borderRadius: [Number, String, Array],
  borderTop: [String, Array],
  borderTopWidth: [Number, String, Array],
  borderTopStyle: [String, Array],
  borderTopColor: [String, Array],
  borderTopLeftRadius: [Number, String, Array],
  borderTopRightRadius: [Number, String, Array],
  borderRight: [String, Array],
  borderRightWidth: [Number, String, Array],
  borderRightStyle: [String, Array],
  borderRightColor: [String, Array],
  borderBottom: [String, Array],
  borderBottomWidth: [Number, String, Array],
  borderBottomStyle: [String, Array],
  borderBottomColor: [String, Array],
  borderBottomLeftRadius: [Number, String, Array],
  borderBottomRightRadius: [Number, String, Array],
  borderLeft: [String, Array],
  borderLeftWidth: [Number, String, Array],
  borderLeftStyle: [String, Array],
  borderLeftColor: [String, Array],
  borderX: [String, Array],
  borderY: [String, Array],
};

// NOTE: https://styled-system.com/table#position
const positions = {
  position: [String, Array],
  zIndex: [Number, String, Array],
  top: [Number, String, Array],
  right: [Number, String, Array],
  bottom: [Number, String, Array],
  left: [Number, String, Array],
};

// NOTE: https://styled-system.com/table#shadow
const shadows = {
  textShadow: [String, Array],
  boxShadow: [String, Array],
};

// NOTE: https://styled-system.com/table#variants
const variants = {
  variant: [String, Array],
  colors: [String, Array],
  textStyle: [String, Array],
};

const allProperties = {
  ...SpaceProperties,
  ...colors,
  ...typography,
  ...layouts,
  ...flexboxLayouts,
  ...gridLayouts,
  ...backgrounds,
  ...borders,
  ...positions,
  ...shadows,
  ...variants,

};

export default allProperties;
