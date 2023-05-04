export const components = {
    MuiButton: {
        defaultProps: {
            disableRipple: true,
        },
        styleOverrides: {
            root: {
                textTransform: 'none',
                fontWeight: 400,
                lineHeight: '148%',
                minWidth: 0,
            },
            text: {
                fontSize: '14px',
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#005FF8'
                },
            },
            outlined: {
                color: '#5E7793',
                border: '1px solid #5E7793',
                
                '&:hover': {
                    color: '#005FF8',
                    border: '1px solid #005FF8'
                }
            }
        }
    },
    
    MuiMenuItem: {
        defaultProps: {
            disableRipple: true,
        },
        styleOverrides: {
            root: {
                height: '40px',
                minWidth: '204px',
                fontSize: '14px',
                "&:hover": {
                    backgroundColor: '#DEEAFE',
                    color: '#122945'
                },
                "&:checked": {
                    backgroundColor: 'transparent',
                }
            }
        }
    },
    MuiTableHead: {
        styleOverrides: {
            root: {
                '& .MuiTableCell-root': {
                    fontWeight: 400,
                    color: '#899CB1',
                    fontSize: '14px',
                }
            }
        }
    },
    
    MuiTableBody: {
        styleOverrides: {
            root: {
                '& .MuiTableRow-root': {
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#899CB1',
                    transitionDuration: '.2s',
                    // cursor: 'pointer',

                }
            }
        }
    },
    
    MuiTableCell: {
        styleOverrides: {
            root: {
                border: 'none',
                fontWeight: 400,
                padding: '0 12px',
                height: '65px',
                '&:first-of-type': {
                    paddingLeft: '40px'
                },
                '&:last-of-type': {
                    paddingRight: '40px'
                }
            }
        }
    },
    
    MuiDateRangeCalendar: {
        styleOverrides: {
            root: {
                
                '&>div:first-of-type': {
                    display: 'none',
                },
            }
        },
        locale: 'ruRU'
    },
    
    
    MuiPickersCalendarHeader: {
        styleOverrides: {
            root: {
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                
                '& .MuiPickersCalendarHeader-label': {}
            },
        }
    },
    MuiPickersSlideTransition: {
        styleOverrides: {
            root: {
                minWidth: '100px !important',
                minHeight: '220px !important',
            }
        }
    },
    
    
    MuiStack: {
        styleOverrides: {
            root: {
                '& .MuiTypography-root': {
                    display: 'none',
                    width: '100%'
                },
                
                '& input': {
                    border: 'none',
                },
                
                '& .MuiBox-root:last-child': {
                    marginLeft: 0
                }
            }
        }
        
    }
}