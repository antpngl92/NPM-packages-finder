const components = {
  MuiPaper: {
    defaultProps: {
      variant: "outlined",
      elevation: 0,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableRipple: true,
      disableElevation: true,
    },
  },
  MuiToolbar: {
    defaultProps: {
      disableGutters: true,
    },
  },
  MuiMenu: {
    defaultProps: {
      disableAutoFocusItem: true,
    },
  },
  MuiMenuItem: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
      color: "inherit",
    },
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: "h5",
    },
    styleOverrides: {
      root: {
        // MUI removes the top padding by default for some reason.
        "+ .MuiDialogContent-root": {
          paddingTop: "20px",
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: { ":before": { backgroundColor: "transparent" } },
    },
  },
  MuiBadge: {
    defaultProps: {
      color: "primary",
    },
  },
  MuiInputBase: {
    styleOverrides: {
      // Removes the up/down arrows from the `number` inputs
      root: {
        "& input[type=number]::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
      },
    },
  },
};

export default components;
