/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 300;
  src: local('Dosis Light'), local('Dosis-Light'), url(http://fonts.gstatic.com/s/dosis/v6/SHQzTQBI7152hSrIuGUiVBTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 300;
  src: local('Dosis Light'), local('Dosis-Light'), url(http://fonts.gstatic.com/s/dosis/v6/7aJzV14HzAOiwNTiPgucGfesZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: local('Dosis Regular'), local('Dosis-Regular'), url(http://fonts.gstatic.com/s/dosis/v6/RlBXAIuiO5GvH9-0-JbBlw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: local('Dosis Regular'), local('Dosis-Regular'), url(http://fonts.gstatic.com/s/dosis/v6/4hYyXH_8WmbBLamf6WjLwg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: local('Dosis Medium'), local('Dosis-Medium'), url(http://fonts.gstatic.com/s/dosis/v6/NI3uVO_o2Ursx6Z1Lyy3oRTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: local('Dosis Medium'), local('Dosis-Medium'), url(http://fonts.gstatic.com/s/dosis/v6/mAcLJWdPWDNiDJwJvcWKc_esZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 600;
  src: local('Dosis SemiBold'), local('Dosis-SemiBold'), url(http://fonts.gstatic.com/s/dosis/v6/yeSIYeveYSpVN04ZbWTWghTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 600;
  src: local('Dosis SemiBold'), local('Dosis-SemiBold'), url(http://fonts.gstatic.com/s/dosis/v6/O6SOu9hYsPHTU43R17NS5fesZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 700;
  src: local('Dosis Bold'), local('Dosis-Bold'), url(http://fonts.gstatic.com/s/dosis/v6/fP7ud4UTUWGxo-nV1joC1RTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 700;
  src: local('Dosis Bold'), local('Dosis-Bold'), url(http://fonts.gstatic.com/s/dosis/v6/22aDRG5X9l7obljtz7tihvesZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
