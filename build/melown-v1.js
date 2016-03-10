!function(a){if("object"==typeof exports)module.exports=a();else if("function"==typeof define&&define.amd)define(a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b._mproj4_=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function Point(a,b,c){if(!(this instanceof Point))return new Point(a,b,c);if(Array.isArray(a))this.x=a[0],this.y=a[1],this.z=a[2]||0;else if("object"==typeof a)this.x=a.x,this.y=a.y,this.z=a.z||0;else if("string"==typeof a&&"undefined"==typeof b){var d=a.split(",");this.x=parseFloat(d[0],10),this.y=parseFloat(d[1],10),this.z=parseFloat(d[2],10)||0}else this.x=a,this.y=b,this.z=c||0;console.warn("_mproj4_.Point will be removed in version 3, use _mproj4_.toPoint")}var d=a("mgrs");Point.fromMGRS=function(a){return new Point(d.toPoint(a))},Point.prototype.toMGRS=function(a){return d.forward([this.x,this.y],a)},b.exports=Point},{mgrs:68}],2:[function(a,b,c){function Projection(a,b){if(!(this instanceof Projection))return new Projection(a);b=b||function(a){if(a)throw a};var c=d(a);if("object"!=typeof c)return void b(a);var f=g(c),h=Projection.projections.get(f.projName);h?(e(this,f),e(this,h),this.init(),b(null,this)):b(a)}var d=a("./parseCode"),e=a("./extend"),f=a("./projections"),g=a("./deriveConstants");Projection.projections=f,Projection.projections.start(),b.exports=Projection},{"./deriveConstants":33,"./extend":34,"./parseCode":37,"./projections":39}],3:[function(a,b,c){b.exports=function(a,b,c){var d,e,f,g=c.x,h=c.y,i=c.z||0;for(f=0;3>f;f++)if(!b||2!==f||void 0!==c.z)switch(0===f?(d=g,e="x"):1===f?(d=h,e="y"):(d=i,e="z"),a.axis[f]){case"e":c[e]=d;break;case"w":c[e]=-d;break;case"n":c[e]=d;break;case"s":c[e]=-d;break;case"u":void 0!==c[e]&&(c.z=d);break;case"d":void 0!==c[e]&&(c.z=-d);break;default:return null}return c}},{}],4:[function(a,b,c){var d=Math.PI/2,e=a("./sign");b.exports=function(a){return Math.abs(a)<d?a:a-e(a)*Math.PI}},{"./sign":21}],5:[function(a,b,c){var d=2*Math.PI,e=3.14159265359,f=a("./sign");b.exports=function(a){return Math.abs(a)<=e?a:a-f(a)*d}},{"./sign":21}],6:[function(a,b,c){b.exports=function(a){return Math.abs(a)>1&&(a=a>1?1:-1),Math.asin(a)}},{}],7:[function(a,b,c){b.exports=function(a){return 1-.25*a*(1+a/16*(3+1.25*a))}},{}],8:[function(a,b,c){b.exports=function(a){return.375*a*(1+.25*a*(1+.46875*a))}},{}],9:[function(a,b,c){b.exports=function(a){return.05859375*a*a*(1+.75*a)}},{}],10:[function(a,b,c){b.exports=function(a){return a*a*a*(35/3072)}},{}],11:[function(a,b,c){b.exports=function(a,b,c){var d=b*c;return a/Math.sqrt(1-d*d)}},{}],12:[function(a,b,c){b.exports=function(a,b,c,d,e){var f,g;f=a/b;for(var h=0;15>h;h++)if(g=(a-(b*f-c*Math.sin(2*f)+d*Math.sin(4*f)-e*Math.sin(6*f)))/(b-2*c*Math.cos(2*f)+4*d*Math.cos(4*f)-6*e*Math.cos(6*f)),f+=g,Math.abs(g)<=1e-10)return f;return NaN}},{}],13:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b){var c=1-(1-a*a)/(2*a)*Math.log((1-a)/(1+a));if(Math.abs(Math.abs(b)-c)<1e-6)return 0>b?-1*d:d;for(var e,f,g,h,i=Math.asin(.5*b),j=0;30>j;j++)if(f=Math.sin(i),g=Math.cos(i),h=a*f,e=Math.pow(1-h*h,2)/(2*g)*(b/(1-a*a)-f/(1-h*h)+.5/a*Math.log((1-h)/(1+h))),i+=e,Math.abs(e)<=1e-10)return i;return NaN}},{}],14:[function(a,b,c){b.exports=function(a,b,c,d,e){return a*e-b*Math.sin(2*e)+c*Math.sin(4*e)-d*Math.sin(6*e)}},{}],15:[function(a,b,c){b.exports=function(a,b,c){var d=a*b;return c/Math.sqrt(1-d*d)}},{}],16:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b){for(var c,e,f=.5*a,g=d-2*Math.atan(b),h=0;15>=h;h++)if(c=a*Math.sin(g),e=d-2*Math.atan(b*Math.pow((1-c)/(1+c),f))-g,g+=e,Math.abs(e)<=1e-10)return g;return-9999}},{}],17:[function(a,b,c){var d=1,e=.25,f=.046875,g=.01953125,h=.01068115234375,i=.75,j=.46875,k=.013020833333333334,l=.007120768229166667,m=.3645833333333333,n=.005696614583333333,o=.3076171875;b.exports=function(a){var b=[];b[0]=d-a*(e+a*(f+a*(g+a*h))),b[1]=a*(i-a*(f+a*(g+a*h)));var c=a*a;return b[2]=c*(j-a*(k+a*l)),c*=a,b[3]=c*(m-a*n),b[4]=c*a*o,b}},{}],18:[function(a,b,c){var d=a("./pj_mlfn"),e=1e-10,f=20;b.exports=function(a,b,c){for(var g=1/(1-b),h=a,i=f;i;--i){var j=Math.sin(h),k=1-b*j*j;if(k=(d(h,j,Math.cos(h),c)-a)*(k*Math.sqrt(k))*g,h-=k,Math.abs(k)<e)return h}return h}},{"./pj_mlfn":19}],19:[function(a,b,c){b.exports=function(a,b,c,d){return c*=b,b*=b,d[0]*a-c*(d[1]+b*(d[2]+b*(d[3]+b*d[4])))}},{}],20:[function(a,b,c){b.exports=function(a,b){var c;return a>1e-7?(c=a*b,(1-a*a)*(b/(1-c*c)-.5/a*Math.log((1-c)/(1+c)))):2*b}},{}],21:[function(a,b,c){b.exports=function(a){return 0>a?-1:1}},{}],22:[function(a,b,c){b.exports=function(a,b){return Math.pow((1-a)/(1+a),b)}},{}],23:[function(a,b,c){b.exports=function(a){var b={x:a[0],y:a[1]};return a.length>2&&(b.z=a[2]),a.length>3&&(b.m=a[3]),b}},{}],24:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b,c){var e=a*c,f=.5*a;return e=Math.pow((1-e)/(1+e),f),Math.tan(.5*(d-b))/e}},{}],25:[function(a,b,c){c.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},c.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},c.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},c.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},c.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},c.potsdam={towgs84:"606.0,23.0,413.0",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},c.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},c.hermannskogel={towgs84:"653.0,-212.0,449.0",ellipse:"bessel",datumName:"Hermannskogel"},c.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},c.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},c.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},c.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"},c.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},c.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},c.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},c.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"}},{}],26:[function(a,b,c){c.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"},c.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},c.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},c.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"},c.airy={a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},c.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},c.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},c.mod_airy={a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},c.andrae={a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},c.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},c.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},c.bessel={a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},c.bess_nam={a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},c.clrk66={a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},c.clrk80={a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},c.clrk58={a:6378293.645208759,rf:294.2606763692654,ellipseName:"Clarke 1858"},c.CPM={a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},c.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},c.engelis={a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},c.evrst30={a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},c.evrst48={a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},c.evrst56={a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},c.evrst69={a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},c.evrstSS={a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},c.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},c.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"},c.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"},c.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"},c.hough={a:6378270,rf:297,ellipseName:"Hough"},c.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},c.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"},c.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"},c.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"},c.new_intl={a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},c.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},c.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},c.SEasia={a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},c.walbeck={a:6376896,b:6355834.8467,ellipseName:"Walbeck"},c.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"},c.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"},c.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"},c.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"},c.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}},{}],27:[function(a,b,c){c.greenwich=0,c.lisbon=-9.131906111111,c.paris=2.337229166667,c.bogota=-74.080916666667,c.madrid=-3.687938888889,c.rome=12.452333333333,c.bern=7.439583333333,c.jakarta=106.807719444444,c.ferro=-17.666666666667,c.brussels=4.367975,c.stockholm=18.058277777778,c.athens=23.7163375,c.oslo=10.722916666667},{}],28:[function(a,b,c){c.ft={to_meter:.3048},c["us-ft"]={to_meter:1200/3937}},{}],29:[function(a,b,c){function d(a,b,c){var d;return Array.isArray(c)?(d=g(a,b,c),3===c.length?[d.x,d.y,d.z]:[d.x,d.y]):g(a,b,c)}function e(a){return a instanceof f?a:a.oProj?a.oProj:f(a)}function _mproj4_(a,b,c){a=e(a);var f,g=!1;return"undefined"==typeof b?(b=a,a=h,g=!0):("undefined"!=typeof b.x||Array.isArray(b))&&(c=b,b=a,a=h,g=!0),b=e(b),c?d(a,b,c):(f={forward:function(c){return d(a,b,c)},inverse:function(c){return d(b,a,c)},info:function(){return{a:b.a,b:b.b,ra:b.R_A,"proj-name":b.projName}}},g&&(f.oProj=b),f)}var f=a("./Proj"),g=a("./transform"),h=f("WGS84");b.exports=_mproj4_},{"./Proj":2,"./transform":66}],30:[function(a,b,c){var d=Math.PI/2,e=1,f=2,g=3,h=4,i=5,j=484813681109536e-20,k=1.0026,l=.3826834323650898,m=function(a){if(!(this instanceof m))return new m(a);if(this.datum_type=h,a){if(a.datumCode&&"none"===a.datumCode&&(this.datum_type=i),a.datum_params){for(var b=0;b<a.datum_params.length;b++)a.datum_params[b]=parseFloat(a.datum_params[b]);(0!==a.datum_params[0]||0!==a.datum_params[1]||0!==a.datum_params[2])&&(this.datum_type=e),a.datum_params.length>3&&(0!==a.datum_params[3]||0!==a.datum_params[4]||0!==a.datum_params[5]||0!==a.datum_params[6])&&(this.datum_type=f,a.datum_params[3]*=j,a.datum_params[4]*=j,a.datum_params[5]*=j,a.datum_params[6]=a.datum_params[6]/1e6+1)}this.datum_type=a.grids?g:this.datum_type,this.a=a.a,this.b=a.b,this.es=a.es,this.ep2=a.ep2,this.datum_params=a.datum_params,this.datum_type===g&&(this.grids=a.grids)}};m.prototype={compare_datums:function(a){return this.datum_type!==a.datum_type?!1:this.a!==a.a||Math.abs(this.es-a.es)>5e-11?!1:this.datum_type===e?this.datum_params[0]===a.datum_params[0]&&this.datum_params[1]===a.datum_params[1]&&this.datum_params[2]===a.datum_params[2]:this.datum_type===f?this.datum_params[0]===a.datum_params[0]&&this.datum_params[1]===a.datum_params[1]&&this.datum_params[2]===a.datum_params[2]&&this.datum_params[3]===a.datum_params[3]&&this.datum_params[4]===a.datum_params[4]&&this.datum_params[5]===a.datum_params[5]&&this.datum_params[6]===a.datum_params[6]:this.datum_type===g||a.datum_type===g?this.nadgrids===a.nadgrids:!0},geodetic_to_geocentric:function(a){var b,c,e,f,g,h,i,j=a.x,k=a.y,l=a.z?a.z:0,m=0;if(-d>k&&k>-1.001*d)k=-d;else if(k>d&&1.001*d>k)k=d;else if(-d>k||k>d)return null;return j>Math.PI&&(j-=2*Math.PI),g=Math.sin(k),i=Math.cos(k),h=g*g,f=this.a/Math.sqrt(1-this.es*h),b=(f+l)*i*Math.cos(j),c=(f+l)*i*Math.sin(j),e=(f*(1-this.es)+l)*g,a.x=b,a.y=c,a.z=e,m},geocentric_to_geodetic:function(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=1e-12,u=t*t,v=30,w=a.x,x=a.y,y=a.z?a.z:0;if(o=!1,b=Math.sqrt(w*w+x*x),c=Math.sqrt(w*w+x*x+y*y),b/this.a<t){if(o=!0,q=0,c/this.a<t)return r=d,void(s=-this.b)}else q=Math.atan2(x,w);e=y/c,f=b/c,g=1/Math.sqrt(1-this.es*(2-this.es)*f*f),j=f*(1-this.es)*g,k=e*g,p=0;do p++,i=this.a/Math.sqrt(1-this.es*k*k),s=b*j+y*k-i*(1-this.es*k*k),h=this.es*i/(i+s),g=1/Math.sqrt(1-h*(2-h)*f*f),l=f*(1-h)*g,m=e*g,n=m*j-l*k,j=l,k=m;while(n*n>u&&v>p);return r=Math.atan(m/Math.abs(l)),a.x=q,a.y=r,a.z=s,a},geocentric_to_geodetic_noniter:function(a){var b,c,e,f,g,h,i,j,m,n,o,p,q,r,s,t,u,v=a.x,w=a.y,x=a.z?a.z:0;if(v=parseFloat(v),w=parseFloat(w),x=parseFloat(x),u=!1,0!==v)b=Math.atan2(w,v);else if(w>0)b=d;else if(0>w)b=-d;else if(u=!0,b=0,x>0)c=d;else{if(!(0>x))return c=d,void(e=-this.b);c=-d}return g=v*v+w*w,f=Math.sqrt(g),h=x*k,j=Math.sqrt(h*h+g),n=h/j,p=f/j,o=n*n*n,i=x+this.b*this.ep2*o,t=f-this.a*this.es*p*p*p,m=Math.sqrt(i*i+t*t),q=i/m,r=t/m,s=this.a/Math.sqrt(1-this.es*q*q),e=r>=l?f/r-s:-l>=r?f/-r-s:x/q+s*(this.es-1),u===!1&&(c=Math.atan(q/r)),a.x=b,a.y=c,a.z=e,a},geocentric_to_wgs84:function(a){if(this.datum_type===e)a.x+=this.datum_params[0],a.y+=this.datum_params[1],a.z+=this.datum_params[2];else if(this.datum_type===f){var b=this.datum_params[0],c=this.datum_params[1],d=this.datum_params[2],g=this.datum_params[3],h=this.datum_params[4],i=this.datum_params[5],j=this.datum_params[6],k=j*(a.x-i*a.y+h*a.z)+b,l=j*(i*a.x+a.y-g*a.z)+c,m=j*(-h*a.x+g*a.y+a.z)+d;a.x=k,a.y=l,a.z=m}},geocentric_from_wgs84:function(a){if(this.datum_type===e)a.x-=this.datum_params[0],a.y-=this.datum_params[1],a.z-=this.datum_params[2];else if(this.datum_type===f){var b=this.datum_params[0],c=this.datum_params[1],d=this.datum_params[2],g=this.datum_params[3],h=this.datum_params[4],i=this.datum_params[5],j=this.datum_params[6],k=(a.x-b)/j,l=(a.y-c)/j,m=(a.z-d)/j;a.x=k+i*l-h*m,a.y=-i*k+l+g*m,a.z=h*k-g*l+m}}},b.exports=m},{}],31:[function(a,b,c){var d=1,e=2,f=3,g=5,h=6378137,i=.006694379990141316;b.exports=function(a,b,c){function j(a){return a===d||a===e}var k,l,m;if(a.compare_datums(b))return c;if(a.datum_type===g||b.datum_type===g)return c;var n=a.a,o=a.es,p=b.a,q=b.es,r=a.datum_type;if(r===f)if(0===this.apply_gridshift(a,0,c))a.a=h,a.es=i;else{if(!a.datum_params)return a.a=n,a.es=a.es,c;for(k=1,l=0,m=a.datum_params.length;m>l;l++)k*=a.datum_params[l];if(0===k)return a.a=n,a.es=a.es,c;r=a.datum_params.length>3?e:d}return b.datum_type===f&&(b.a=h,b.es=i),(a.es!==b.es||a.a!==b.a||j(r)||j(b.datum_type))&&(a.geodetic_to_geocentric(c),j(a.datum_type)&&a.geocentric_to_wgs84(c),j(b.datum_type)&&b.geocentric_from_wgs84(c),b.geocentric_to_geodetic(c)),b.datum_type===f&&this.apply_gridshift(b,1,c),a.a=n,a.es=o,b.a=p,b.es=q,c}},{}],32:[function(a,b,c){function d(a){var b=this;if(2===arguments.length){var c=arguments[1];"string"==typeof c?"+"===c.charAt(0)?d[a]=f(arguments[1]):d[a]=g(arguments[1]):d[a]=c}else if(1===arguments.length){if(Array.isArray(a))return a.map(function(a){Array.isArray(a)?d.apply(b,a):d(a)});if("string"==typeof a){if(a in d)return d[a]}else"EPSG"in a?d["EPSG:"+a.EPSG]=a:"ESRI"in a?d["ESRI:"+a.ESRI]=a:"IAU2000"in a?d["IAU2000:"+a.IAU2000]=a:console.log(a);return}}var e=a("./global"),f=a("./projString"),g=a("./wkt");e(d),b.exports=d},{"./global":35,"./projString":38,"./wkt":67}],33:[function(a,b,c){var d=a("./constants/Datum"),e=a("./constants/Ellipsoid"),f=a("./extend"),g=a("./datum"),h=1e-10,i=.16666666666666666,j=.04722222222222222,k=.022156084656084655;b.exports=function(a){if(a.datumCode&&"none"!==a.datumCode){var b=d[a.datumCode];b&&(a.datum_params=b.towgs84?b.towgs84.split(","):null,a.ellps=b.ellipse,a.datumName=b.datumName?b.datumName:a.datumCode)}if(!a.a){var c=e[a.ellps]?e[a.ellps]:e.WGS84;f(a,c)}return a.rf&&!a.b&&(a.b=(1-1/a.rf)*a.a),(0===a.rf||Math.abs(a.a-a.b)<h)&&(a.sphere=!0,a.b=a.a),a.a2=a.a*a.a,a.b2=a.b*a.b,a.es=(a.a2-a.b2)/a.a2,a.e=Math.sqrt(a.es),a.R_A&&(a.a*=1-a.es*(i+a.es*(j+a.es*k)),a.a2=a.a*a.a,a.b2=a.b*a.b,a.es=0),a.ep2=(a.a2-a.b2)/a.b2,a.k0||(a.k0=1),a.axis||(a.axis="enu"),a.datum||(a.datum=g(a)),a}},{"./constants/Datum":25,"./constants/Ellipsoid":26,"./datum":30,"./extend":34}],34:[function(a,b,c){b.exports=function(a,b){a=a||{};var c,d;if(!b)return a;for(d in b)c=b[d],void 0!==c&&(a[d]=c);return a}},{}],35:[function(a,b,c){b.exports=function(a){a("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),a("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),a("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),a.WGS84=a["EPSG:4326"],a["EPSG:3785"]=a["EPSG:3857"],a.GOOGLE=a["EPSG:3857"],a["EPSG:900913"]=a["EPSG:3857"],a["EPSG:102113"]=a["EPSG:3857"]}},{}],36:[function(a,b,c){var _mproj4_=a("./core");_mproj4_.defaultDatum="WGS84",_mproj4_.Proj=a("./Proj"),_mproj4_.WGS84=new _mproj4_.Proj("WGS84"),_mproj4_.Point=a("./Point"),_mproj4_.toPoint=a("./common/toPoint"),_mproj4_.defs=a("./defs"),_mproj4_.transform=a("./transform"),_mproj4_.mgrs=a("mgrs"),_mproj4_.version=a("../package.json").version,a("./includedProjections")(_mproj4_),b.exports=_mproj4_},{"../package.json":69,"./Point":1,"./Proj":2,"./common/toPoint":23,"./core":29,"./defs":32,"./includedProjections":"Pk/iAZ","./transform":66,mgrs:68}],37:[function(a,b,c){function d(a){return"string"==typeof a}function e(a){return a in i}function f(a){var b=["GEOGCS","GEOCCS","PROJCS","LOCAL_CS"];return b.reduce(function(b,c){return b+1+a.indexOf(c)},0)}function g(a){return"+"===a[0]}function h(a){return d(a)?e(a)?i[a]:f(a)?j(a):g(a)?k(a):void 0:a}var i=a("./defs"),j=a("./wkt"),k=a("./projString");b.exports=h},{"./defs":32,"./projString":38,"./wkt":67}],38:[function(a,b,c){var d=.017453292519943295,e=a("./constants/PrimeMeridian"),f=a("./constants/units");b.exports=function(a){var b={},c={};a.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).forEach(function(a){var b=a.split("=");b.push(!0),c[b[0].toLowerCase()]=b[1]});var g,h,i,j={proj:"projName",datum:"datumCode",rf:function(a){b.rf=parseFloat(a)},lat_0:function(a){b.lat0=a*d},lat_1:function(a){b.lat1=a*d},lat_2:function(a){b.lat2=a*d},lat_ts:function(a){b.lat_ts=a*d},lon_0:function(a){b.long0=a*d},lon_1:function(a){b.long1=a*d},lon_2:function(a){b.long2=a*d},alpha:function(a){b.alpha=parseFloat(a)*d},lonc:function(a){b.longc=a*d},x_0:function(a){b.x0=parseFloat(a)},y_0:function(a){b.y0=parseFloat(a)},k_0:function(a){b.k0=parseFloat(a)},k:function(a){b.k0=parseFloat(a)},a:function(a){b.a=parseFloat(a)},b:function(a){b.b=parseFloat(a)},r_a:function(){b.R_A=!0},zone:function(a){b.zone=parseInt(a,10)},south:function(){b.utmSouth=!0},towgs84:function(a){b.datum_params=a.split(",").map(function(a){return parseFloat(a)})},to_meter:function(a){b.to_meter=parseFloat(a)},units:function(a){b.units=a,f[a]&&(b.to_meter=f[a].to_meter)},from_greenwich:function(a){b.from_greenwich=a*d},pm:function(a){b.from_greenwich=(e[a]?e[a]:parseFloat(a))*d},nadgrids:function(a){"@null"===a?b.datumCode="none":b.nadgrids=a},axis:function(a){var c="ewnsud";3===a.length&&-1!==c.indexOf(a.substr(0,1))&&-1!==c.indexOf(a.substr(1,1))&&-1!==c.indexOf(a.substr(2,1))&&(b.axis=a)}};for(g in c)h=c[g],g in j?(i=j[g],"function"==typeof i?i(h):b[i]=h):b[g]=h;return"string"==typeof b.datumCode&&"WGS84"!==b.datumCode&&(b.datumCode=b.datumCode.toLowerCase()),b}},{"./constants/PrimeMeridian":27,"./constants/units":28}],39:[function(a,b,c){function d(a,b){var c=g.length;return a.names?(g[c]=a,a.names.forEach(function(a){f[a.toLowerCase()]=c}),this):(console.log(b),!0)}var e=[a("./projections/merc"),a("./projections/longlat")],f={},g=[];c.add=d,c.get=function(a){if(!a)return!1;var b=a.toLowerCase();return"undefined"!=typeof f[b]&&g[f[b]]?g[f[b]]:void 0},c.start=function(){e.forEach(d)}},{"./projections/longlat":52,"./projections/merc":53}],40:[function(a,b,c){var d=1e-10,e=a("../common/msfnz"),f=a("../common/qsfnz"),g=a("../common/adjust_lon"),h=a("../common/asinz");c.init=function(){Math.abs(this.lat1+this.lat2)<d||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=e(this.e3,this.sin_po,this.cos_po),this.qs1=f(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=e(this.e3,this.sin_po,this.cos_po),this.qs2=f(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=f(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>d?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)},c.forward=function(a){var b=a.x,c=a.y;this.sin_phi=Math.sin(c),this.cos_phi=Math.cos(c);var d=f(this.e3,this.sin_phi,this.cos_phi),e=this.a*Math.sqrt(this.c-this.ns0*d)/this.ns0,h=this.ns0*g(b-this.long0),i=e*Math.sin(h)+this.x0,j=this.rh-e*Math.cos(h)+this.y0;return a.x=i,a.y=j,a},c.inverse=function(a){var b,c,d,e,f,h;return a.x-=this.x0,a.y=this.rh-a.y+this.y0,this.ns0>=0?(b=Math.sqrt(a.x*a.x+a.y*a.y),d=1):(b=-Math.sqrt(a.x*a.x+a.y*a.y),d=-1),e=0,0!==b&&(e=Math.atan2(d*a.x,d*a.y)),d=b*this.ns0/this.a,this.sphere?h=Math.asin((this.c-d*d)/(2*this.ns0)):(c=(this.c-d*d)/this.ns0,h=this.phi1z(this.e3,c)),f=g(e/this.ns0+this.long0),a.x=f,a.y=h,a},c.phi1z=function(a,b){var c,e,f,g,i,j=h(.5*b);if(d>a)return j;for(var k=a*a,l=1;25>=l;l++)if(c=Math.sin(j),e=Math.cos(j),f=a*c,g=1-f*f,i=.5*g*g/e*(b/(1-k)-c/g+.5/a*Math.log((1-f)/(1+f))),j+=i,Math.abs(i)<=1e-7)return j;return null},c.names=["Albers_Conic_Equal_Area","Albers","aea"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/msfnz":15,"../common/qsfnz":20}],41:[function(a,b,c){var d=a("../common/adjust_lon"),e=Math.PI/2,f=1e-10,g=a("../common/mlfn"),h=a("../common/e0fn"),i=a("../common/e1fn"),j=a("../common/e2fn"),k=a("../common/e3fn"),l=a("../common/gN"),m=a("../common/asinz"),n=a("../common/imlfn");c.init=function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)},c.forward=function(a){var b,c,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=a.x,I=a.y,J=Math.sin(a.y),K=Math.cos(a.y),L=d(H-this.long0);return this.sphere?Math.abs(this.sin_p12-1)<=f?(a.x=this.x0+this.a*(e-I)*Math.sin(L),a.y=this.y0-this.a*(e-I)*Math.cos(L),a):Math.abs(this.sin_p12+1)<=f?(a.x=this.x0+this.a*(e+I)*Math.sin(L),a.y=this.y0+this.a*(e+I)*Math.cos(L),a):(B=this.sin_p12*J+this.cos_p12*K*Math.cos(L),z=Math.acos(B),A=z/Math.sin(z),a.x=this.x0+this.a*A*K*Math.sin(L),a.y=this.y0+this.a*A*(this.cos_p12*J-this.sin_p12*K*Math.cos(L)),a):(b=h(this.es),c=i(this.es),m=j(this.es),n=k(this.es),Math.abs(this.sin_p12-1)<=f?(o=this.a*g(b,c,m,n,e),p=this.a*g(b,c,m,n,I),a.x=this.x0+(o-p)*Math.sin(L),a.y=this.y0-(o-p)*Math.cos(L),a):Math.abs(this.sin_p12+1)<=f?(o=this.a*g(b,c,m,n,e),p=this.a*g(b,c,m,n,I),a.x=this.x0+(o+p)*Math.sin(L),a.y=this.y0+(o+p)*Math.cos(L),a):(q=J/K,r=l(this.a,this.e,this.sin_p12),s=l(this.a,this.e,J),t=Math.atan((1-this.es)*q+this.es*r*this.sin_p12/(s*K)),u=Math.atan2(Math.sin(L),this.cos_p12*Math.tan(t)-this.sin_p12*Math.cos(L)),C=0===u?Math.asin(this.cos_p12*Math.sin(t)-this.sin_p12*Math.cos(t)):Math.abs(Math.abs(u)-Math.PI)<=f?-Math.asin(this.cos_p12*Math.sin(t)-this.sin_p12*Math.cos(t)):Math.asin(Math.sin(L)*Math.cos(t)/Math.sin(u)),v=this.e*this.sin_p12/Math.sqrt(1-this.es),w=this.e*this.cos_p12*Math.cos(u)/Math.sqrt(1-this.es),x=v*w,y=w*w,D=C*C,E=D*C,F=E*C,G=F*C,z=r*C*(1-D*y*(1-y)/6+E/8*x*(1-2*y)+F/120*(y*(4-7*y)-3*v*v*(1-7*y))-G/48*x),a.x=this.x0+z*Math.sin(u),a.y=this.y0+z*Math.cos(u),a))},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;if(this.sphere){if(b=Math.sqrt(a.x*a.x+a.y*a.y),b>2*e*this.a)return;return c=b/this.a,o=Math.sin(c),p=Math.cos(c),q=this.long0,Math.abs(b)<=f?r=this.lat0:(r=m(p*this.sin_p12+a.y*o*this.cos_p12/b),s=Math.abs(this.lat0)-e,q=d(Math.abs(s)<=f?this.lat0>=0?this.long0+Math.atan2(a.x,-a.y):this.long0-Math.atan2(-a.x,a.y):this.long0+Math.atan2(a.x*o,b*this.cos_p12*p-a.y*this.sin_p12*o))),a.x=q,a.y=r,a}return t=h(this.es),u=i(this.es),v=j(this.es),w=k(this.es),Math.abs(this.sin_p12-1)<=f?(x=this.a*g(t,u,v,w,e),b=Math.sqrt(a.x*a.x+a.y*a.y),y=x-b,r=n(y/this.a,t,u,v,w),q=d(this.long0+Math.atan2(a.x,-1*a.y)),a.x=q,a.y=r,a):Math.abs(this.sin_p12+1)<=f?(x=this.a*g(t,u,v,w,e),b=Math.sqrt(a.x*a.x+a.y*a.y),y=b-x,r=n(y/this.a,t,u,v,w),q=d(this.long0+Math.atan2(a.x,a.y)),a.x=q,a.y=r,a):(b=Math.sqrt(a.x*a.x+a.y*a.y),B=Math.atan2(a.x,a.y),z=l(this.a,this.e,this.sin_p12),C=Math.cos(B),D=this.e*this.cos_p12*C,E=-D*D/(1-this.es),F=3*this.es*(1-E)*this.sin_p12*this.cos_p12*C/(1-this.es),G=b/z,H=G-E*(1+E)*Math.pow(G,3)/6-F*(1+3*E)*Math.pow(G,4)/24,I=1-E*H*H/2-G*H*H*H/6,A=Math.asin(this.sin_p12*Math.cos(H)+this.cos_p12*Math.sin(H)*C),q=d(this.long0+Math.asin(Math.sin(B)*Math.sin(H)/Math.cos(A))),r=Math.atan((1-this.es*I*this.sin_p12/Math.sin(A))*Math.tan(A)/(1-this.es)),a.x=q,a.y=r,a)},c.names=["Azimuthal_Equidistant","aeqd"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/imlfn":12,"../common/mlfn":14}],42:[function(a,b,c){var d=a("../common/mlfn"),e=a("../common/e0fn"),f=a("../common/e1fn"),g=a("../common/e2fn"),h=a("../common/e3fn"),i=a("../common/gN"),j=a("../common/adjust_lon"),k=a("../common/adjust_lat"),l=a("../common/imlfn"),m=Math.PI/2,n=1e-10;c.init=function(){this.sphere||(this.e0=e(this.es),this.e1=f(this.es),this.e2=g(this.es),this.e3=h(this.es),this.ml0=this.a*d(this.e0,this.e1,this.e2,this.e3,this.lat0))},c.forward=function(a){var b,c,e=a.x,f=a.y;if(e=j(e-this.long0),this.sphere)b=this.a*Math.asin(Math.cos(f)*Math.sin(e)),c=this.a*(Math.atan2(Math.tan(f),Math.cos(e))-this.lat0);else{var g=Math.sin(f),h=Math.cos(f),k=i(this.a,this.e,g),l=Math.tan(f)*Math.tan(f),m=e*Math.cos(f),n=m*m,o=this.es*h*h/(1-this.es),p=this.a*d(this.e0,this.e1,this.e2,this.e3,f);b=k*m*(1-n*l*(1/6-(8-l+8*o)*n/120)),c=p-this.ml0+k*g/h*n*(.5+(5-l+6*o)*n/24)}return a.x=b+this.x0,a.y=c+this.y0,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,d=a.x/this.a,e=a.y/this.a;if(this.sphere){var f=e+this.lat0;b=Math.asin(Math.sin(f)*Math.cos(d)),c=Math.atan2(Math.tan(d),Math.cos(f))}else{var g=this.ml0/this.a+e,h=l(g,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(h)-m)<=n)return a.x=this.long0,a.y=m,0>e&&(a.y*=-1),a;var o=i(this.a,this.e,Math.sin(h)),p=o*o*o/this.a/this.a*(1-this.es),q=Math.pow(Math.tan(h),2),r=d*this.a/o,s=r*r;b=h-o*Math.tan(h)/p*r*r*(.5-(1+3*q)*r*r/24),c=r*(1-s*(q/3+(1+3*q)*q*s/15))/Math.cos(h)}return a.x=j(c+this.long0),a.y=k(b),a},c.names=["Cassini","Cassini_Soldner","cass"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/imlfn":12,"../common/mlfn":14}],43:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/qsfnz"),f=a("../common/msfnz"),g=a("../common/iqsfnz");c.init=function(){this.sphere||(this.k0=f(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},c.forward=function(a){var b,c,f=a.x,g=a.y,h=d(f-this.long0);if(this.sphere)b=this.x0+this.a*h*Math.cos(this.lat_ts),c=this.y0+this.a*Math.sin(g)/Math.cos(this.lat_ts);else{var i=e(this.e,Math.sin(g));b=this.x0+this.a*this.k0*h,c=this.y0+this.a*i*.5/this.k0}return a.x=b,a.y=c,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c;return this.sphere?(b=d(this.long0+a.x/this.a/Math.cos(this.lat_ts)),c=Math.asin(a.y/this.a*Math.cos(this.lat_ts))):(c=g(this.e,2*a.y*this.k0/this.a),b=d(this.long0+a.x/(this.a*this.k0))),a.x=b,a.y=c,a},c.names=["cea"]},{"../common/adjust_lon":5,"../common/iqsfnz":13,"../common/msfnz":15,"../common/qsfnz":20}],44:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/adjust_lat");c.init=function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)},c.forward=function(a){var b=a.x,c=a.y,f=d(b-this.long0),g=e(c-this.lat0);return a.x=this.x0+this.a*f*this.rc,a.y=this.y0+this.a*g,a},c.inverse=function(a){var b=a.x,c=a.y;return a.x=d(this.long0+(b-this.x0)/(this.a*this.rc)),a.y=e(this.lat0+(c-this.y0)/this.a),a},c.names=["Equirectangular","Equidistant_Cylindrical","eqc"]},{"../common/adjust_lat":4,"../common/adjust_lon":5}],45:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/msfnz"),i=a("../common/mlfn"),j=a("../common/adjust_lon"),k=a("../common/adjust_lat"),l=a("../common/imlfn"),m=1e-10;c.init=function(){Math.abs(this.lat1+this.lat2)<m||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=h(this.e,this.sinphi,this.cosphi),this.ml1=i(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<m?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=h(this.e,this.sinphi,this.cosphi),this.ml2=i(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=i(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))},c.forward=function(a){var b,c=a.x,d=a.y;if(this.sphere)b=this.a*(this.g-d);else{var e=i(this.e0,this.e1,this.e2,this.e3,d);b=this.a*(this.g-e)}var f=this.ns*j(c-this.long0),g=this.x0+b*Math.sin(f),h=this.y0+this.rh-b*Math.cos(f);return a.x=g,a.y=h,a},c.inverse=function(a){a.x-=this.x0,a.y=this.rh-a.y+this.y0;var b,c,d,e;this.ns>=0?(c=Math.sqrt(a.x*a.x+a.y*a.y),b=1):(c=-Math.sqrt(a.x*a.x+a.y*a.y),b=-1);var f=0;if(0!==c&&(f=Math.atan2(b*a.x,b*a.y)),this.sphere)return e=j(this.long0+f/this.ns),d=k(this.g-c/this.a),a.x=e,a.y=d,a;var g=this.g-c/this.a;return d=l(g,this.e0,this.e1,this.e2,this.e3),e=j(this.long0+f/this.ns),a.x=e,a.y=d,a},c.names=["Equidistant_Conic","eqdc"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/imlfn":12,"../common/mlfn":14,"../common/msfnz":15}],46:[function(a,b,c){var d=Math.PI/4,e=a("../common/srat"),f=Math.PI/2,g=20;c.init=function(){var a=Math.sin(this.lat0),b=Math.cos(this.lat0);b*=b,this.rc=Math.sqrt(1-this.es)/(1-this.es*a*a),this.C=Math.sqrt(1+this.es*b*b/(1-this.es)),this.phic0=Math.asin(a/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+d)/(Math.pow(Math.tan(.5*this.lat0+d),this.C)*e(this.e*a,this.ratexp))},c.forward=function(a){var b=a.x,c=a.y;return a.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*c+d),this.C)*e(this.e*Math.sin(c),this.ratexp))-f,a.x=this.C*b,a},c.inverse=function(a){for(var b=1e-14,c=a.x/this.C,h=a.y,i=Math.pow(Math.tan(.5*h+d)/this.K,1/this.C),j=g;j>0&&(h=2*Math.atan(i*e(this.e*Math.sin(a.y),-.5*this.e))-f,!(Math.abs(h-a.y)<b));--j)a.y=h;return j?(a.x=c,a.y=h,a):null},c.names=["gauss"]},{"../common/srat":22}],47:[function(a,b,c){function d(a){return a;
}c.init=function(){this.isGeocent=!0},c.forward=d,c.inverse=d,c.names=["geocent"]},{}],48:[function(a,b,c){var d=a("../common/adjust_lon"),e=1e-10,f=a("../common/asinz");c.init=function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1},c.forward=function(a){var b,c,f,g,h,i,j,k,l=a.x,m=a.y;return f=d(l-this.long0),b=Math.sin(m),c=Math.cos(m),g=Math.cos(f),i=this.sin_p14*b+this.cos_p14*c*g,h=1,i>0||Math.abs(i)<=e?(j=this.x0+this.a*h*c*Math.sin(f)/i,k=this.y0+this.a*h*(this.cos_p14*b-this.sin_p14*c*g)/i):(j=this.x0+this.infinity_dist*c*Math.sin(f),k=this.y0+this.infinity_dist*(this.cos_p14*b-this.sin_p14*c*g)),a.x=j,a.y=k,a},c.inverse=function(a){var b,c,e,g,h,i;return a.x=(a.x-this.x0)/this.a,a.y=(a.y-this.y0)/this.a,a.x/=this.k0,a.y/=this.k0,(b=Math.sqrt(a.x*a.x+a.y*a.y))?(g=Math.atan2(b,this.rc),c=Math.sin(g),e=Math.cos(g),i=f(e*this.sin_p14+a.y*c*this.cos_p14/b),h=Math.atan2(a.x*c,b*this.cos_p14*e-a.y*this.sin_p14*c),h=d(this.long0+h)):(i=this.phic0,h=0),a.x=h,a.y=i,a},c.names=["gnom"]},{"../common/adjust_lon":5,"../common/asinz":6}],49:[function(a,b,c){var d=a("../common/adjust_lon");c.init=function(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq},c.forward=function(a){var b,c,e,f,g,h,i,j=a.x,k=a.y,l=d(j-this.long0);return b=Math.pow((1+this.e*Math.sin(k))/(1-this.e*Math.sin(k)),this.alfa*this.e/2),c=2*(Math.atan(this.k*Math.pow(Math.tan(k/2+this.s45),this.alfa)/b)-this.s45),e=-l*this.alfa,f=Math.asin(Math.cos(this.ad)*Math.sin(c)+Math.sin(this.ad)*Math.cos(c)*Math.cos(e)),g=Math.asin(Math.cos(c)*Math.sin(e)/Math.cos(f)),h=this.n*g,i=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(f/2+this.s45),this.n),a.y=i*Math.cos(h)/1,a.x=i*Math.sin(h)/1,this.czech||(a.y*=-1,a.x*=-1),a},c.inverse=function(a){var b,c,d,e,f,g,h,i,j=a.x;a.x=a.y,a.y=j,this.czech||(a.y*=-1,a.x*=-1),g=Math.sqrt(a.x*a.x+a.y*a.y),f=Math.atan2(a.y,a.x),e=f/Math.sin(this.s0),d=2*(Math.atan(Math.pow(this.ro0/g,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),b=Math.asin(Math.cos(this.ad)*Math.sin(d)-Math.sin(this.ad)*Math.cos(d)*Math.cos(e)),c=Math.asin(Math.cos(d)*Math.sin(e)/Math.cos(b)),a.x=this.long0-c/this.alfa,h=b,i=0;var k=0;do a.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(b/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.e/2))-this.s45),Math.abs(h-a.y)<1e-10&&(i=1),h=a.y,k+=1;while(0===i&&15>k);return k>=15?null:a},c.names=["Krovak","krovak"]},{"../common/adjust_lon":5}],50:[function(a,b,c){var d=Math.PI/2,e=Math.PI/4,f=1e-10,g=a("../common/qsfnz"),h=a("../common/adjust_lon");c.S_POLE=1,c.N_POLE=2,c.EQUIT=3,c.OBLIQ=4,c.init=function(){var a=Math.abs(this.lat0);if(Math.abs(a-d)<f?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(a)<f?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var b;switch(this.qp=g(this.e,1),this.mmf=.5/(1-this.es),this.apa=this.authset(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),b=Math.sin(this.lat0),this.sinb1=g(this.e,b)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*b*b)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))},c.forward=function(a){var b,c,i,j,k,l,m,n,o,p,q=a.x,r=a.y;if(q=h(q-this.long0),this.sphere){if(k=Math.sin(r),p=Math.cos(r),i=Math.cos(q),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(c=this.mode===this.EQUIT?1+p*i:1+this.sinph0*k+this.cosph0*p*i,f>=c)return null;c=Math.sqrt(2/c),b=c*p*Math.sin(q),c*=this.mode===this.EQUIT?k:this.cosph0*k-this.sinph0*p*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(r+this.phi0)<f)return null;c=e-.5*r,c=2*(this.mode===this.S_POLE?Math.cos(c):Math.sin(c)),b=c*Math.sin(q),c*=i}}else{switch(m=0,n=0,o=0,i=Math.cos(q),j=Math.sin(q),k=Math.sin(r),l=g(this.e,k),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(m=l/this.qp,n=Math.sqrt(1-m*m)),this.mode){case this.OBLIQ:o=1+this.sinb1*m+this.cosb1*n*i;break;case this.EQUIT:o=1+n*i;break;case this.N_POLE:o=d+r,l=this.qp-l;break;case this.S_POLE:o=r-d,l=this.qp+l}if(Math.abs(o)<f)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:o=Math.sqrt(2/o),c=this.mode===this.OBLIQ?this.ymf*o*(this.cosb1*m-this.sinb1*n*i):(o=Math.sqrt(2/(1+n*i)))*m*this.ymf,b=this.xmf*o*n*j;break;case this.N_POLE:case this.S_POLE:l>=0?(b=(o=Math.sqrt(l))*j,c=i*(this.mode===this.S_POLE?o:-o)):b=c=0}}return a.x=this.a*b+this.x0,a.y=this.a*c+this.y0,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,e,g,i,j,k,l=a.x/this.a,m=a.y/this.a;if(this.sphere){var n,o=0,p=0;if(n=Math.sqrt(l*l+m*m),c=.5*n,c>1)return null;switch(c=2*Math.asin(c),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(p=Math.sin(c),o=Math.cos(c)),this.mode){case this.EQUIT:c=Math.abs(n)<=f?0:Math.asin(m*p/n),l*=p,m=o*n;break;case this.OBLIQ:c=Math.abs(n)<=f?this.phi0:Math.asin(o*this.sinph0+m*p*this.cosph0/n),l*=p*this.cosph0,m=(o-Math.sin(c)*this.sinph0)*n;break;case this.N_POLE:m=-m,c=d-c;break;case this.S_POLE:c-=d}b=0!==m||this.mode!==this.EQUIT&&this.mode!==this.OBLIQ?Math.atan2(l,m):0}else{if(k=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(l/=this.dd,m*=this.dd,j=Math.sqrt(l*l+m*m),f>j)return a.x=0,a.y=this.phi0,a;g=2*Math.asin(.5*j/this.rq),e=Math.cos(g),l*=g=Math.sin(g),this.mode===this.OBLIQ?(k=e*this.sinb1+m*g*this.cosb1/j,i=this.qp*k,m=j*this.cosb1*e-m*this.sinb1*g):(k=m*g/j,i=this.qp*k,m=j*e)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(m=-m),i=l*l+m*m,!i)return a.x=0,a.y=this.phi0,a;k=1-i/this.qp,this.mode===this.S_POLE&&(k=-k)}b=Math.atan2(l,m),c=this.authlat(Math.asin(k),this.apa)}return a.x=h(this.long0+b),a.y=c,a},c.P00=.3333333333333333,c.P01=.17222222222222222,c.P02=.10257936507936508,c.P10=.06388888888888888,c.P11=.0664021164021164,c.P20=.016415012942191543,c.authset=function(a){var b,c=[];return c[0]=a*this.P00,b=a*a,c[0]+=b*this.P01,c[1]=b*this.P10,b*=a,c[0]+=b*this.P02,c[1]+=b*this.P11,c[2]=b*this.P20,c},c.authlat=function(a,b){var c=a+a;return a+b[0]*Math.sin(c)+b[1]*Math.sin(c+c)+b[2]*Math.sin(c+c+c)},c.names=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"]},{"../common/adjust_lon":5,"../common/qsfnz":20}],51:[function(a,b,c){var d=1e-10,e=a("../common/msfnz"),f=a("../common/tsfnz"),g=Math.PI/2,h=a("../common/sign"),i=a("../common/adjust_lon"),j=a("../common/phi2z");c.init=function(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<d)){var a=this.b/this.a;this.e=Math.sqrt(1-a*a);var b=Math.sin(this.lat1),c=Math.cos(this.lat1),g=e(this.e,b,c),h=f(this.e,this.lat1,b),i=Math.sin(this.lat2),j=Math.cos(this.lat2),k=e(this.e,i,j),l=f(this.e,this.lat2,i),m=f(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>d?this.ns=Math.log(g/k)/Math.log(h/l):this.ns=b,isNaN(this.ns)&&(this.ns=b),this.f0=g/(this.ns*Math.pow(h,this.ns)),this.rh=this.a*this.f0*Math.pow(m,this.ns),this.title||(this.title="Lambert Conformal Conic")}},c.forward=function(a){var b=a.x,c=a.y;Math.abs(2*Math.abs(c)-Math.PI)<=d&&(c=h(c)*(g-2*d));var e,j,k=Math.abs(Math.abs(c)-g);if(k>d)e=f(this.e,c,Math.sin(c)),j=this.a*this.f0*Math.pow(e,this.ns);else{if(k=c*this.ns,0>=k)return null;j=0}var l=this.ns*i(b-this.long0);return a.x=this.k0*(j*Math.sin(l))+this.x0,a.y=this.k0*(this.rh-j*Math.cos(l))+this.y0,a},c.inverse=function(a){var b,c,d,e,f,h=(a.x-this.x0)/this.k0,k=this.rh-(a.y-this.y0)/this.k0;this.ns>0?(b=Math.sqrt(h*h+k*k),c=1):(b=-Math.sqrt(h*h+k*k),c=-1);var l=0;if(0!==b&&(l=Math.atan2(c*h,c*k)),0!==b||this.ns>0){if(c=1/this.ns,d=Math.pow(b/(this.a*this.f0),c),e=j(this.e,d),-9999===e)return null}else e=-g;return f=i(l/this.ns+this.long0),a.x=f,a.y=e,a},c.names=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_2SP","lcc"]},{"../common/adjust_lon":5,"../common/msfnz":15,"../common/phi2z":16,"../common/sign":21,"../common/tsfnz":24}],52:[function(a,b,c){function d(a){return a}c.init=function(){},c.forward=d,c.inverse=d,c.names=["longlat","identity"]},{}],53:[function(a,b,c){var d=a("../common/msfnz"),e=Math.PI/2,f=1e-10,g=57.29577951308232,h=a("../common/adjust_lon"),i=Math.PI/4,j=a("../common/tsfnz"),k=a("../common/phi2z");c.init=function(){var a=this.b/this.a;this.es=1-a*a,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=d(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)},c.forward=function(a){var b=a.x,c=a.y;if(c*g>90&&-90>c*g&&b*g>180&&-180>b*g)return null;var d,k;if(Math.abs(Math.abs(c)-e)<=f)return null;if(this.sphere)d=this.x0+this.a*this.k0*h(b-this.long0),k=this.y0+this.a*this.k0*Math.log(Math.tan(i+.5*c));else{var l=Math.sin(c),m=j(this.e,c,l);d=this.x0+this.a*this.k0*h(b-this.long0),k=this.y0-this.a*this.k0*Math.log(m)}return a.x=d,a.y=k,a},c.inverse=function(a){var b,c,d=a.x-this.x0,f=a.y-this.y0;if(this.sphere)c=e-2*Math.atan(Math.exp(-f/(this.a*this.k0)));else{var g=Math.exp(-f/(this.a*this.k0));if(c=k(this.e,g),-9999===c)return null}return b=h(this.long0+d/(this.a*this.k0)),a.x=b,a.y=c,a},c.names=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"]},{"../common/adjust_lon":5,"../common/msfnz":15,"../common/phi2z":16,"../common/tsfnz":24}],54:[function(a,b,c){var d=a("../common/adjust_lon");c.init=function(){},c.forward=function(a){var b=a.x,c=a.y,e=d(b-this.long0),f=this.x0+this.a*e,g=this.y0+this.a*Math.log(Math.tan(Math.PI/4+c/2.5))*1.25;return a.x=f,a.y=g,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b=d(this.long0+a.x/this.a),c=2.5*(Math.atan(Math.exp(.8*a.y/this.a))-Math.PI/4);return a.x=b,a.y=c,a},c.names=["Miller_Cylindrical","mill"]},{"../common/adjust_lon":5}],55:[function(a,b,c){var d=a("../common/adjust_lon"),e=1e-10;c.init=function(){},c.forward=function(a){for(var b=a.x,c=a.y,f=d(b-this.long0),g=c,h=Math.PI*Math.sin(c),i=0;!0;i++){var j=-(g+Math.sin(g)-h)/(1+Math.cos(g));if(g+=j,Math.abs(j)<e)break}g/=2,Math.PI/2-Math.abs(c)<e&&(f=0);var k=.900316316158*this.a*f*Math.cos(g)+this.x0,l=1.4142135623731*this.a*Math.sin(g)+this.y0;return a.x=k,a.y=l,a},c.inverse=function(a){var b,c;a.x-=this.x0,a.y-=this.y0,c=a.y/(1.4142135623731*this.a),Math.abs(c)>.999999999999&&(c=.999999999999),b=Math.asin(c);var e=d(this.long0+a.x/(.900316316158*this.a*Math.cos(b)));e<-Math.PI&&(e=-Math.PI),e>Math.PI&&(e=Math.PI),c=(2*b+Math.sin(2*b))/Math.PI,Math.abs(c)>1&&(c=1);var f=Math.asin(c);return a.x=e,a.y=f,a},c.names=["Mollweide","moll"]},{"../common/adjust_lon":5}],56:[function(a,b,c){var d=484813681109536e-20;c.iterations=1,c.init=function(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013},c.forward=function(a){var b,c=a.x,e=a.y,f=e-this.lat0,g=c-this.long0,h=f/d*1e-5,i=g,j=1,k=0;for(b=1;10>=b;b++)j*=h,k+=this.A[b]*j;var l,m,n=k,o=i,p=1,q=0,r=0,s=0;for(b=1;6>=b;b++)l=p*n-q*o,m=q*n+p*o,p=l,q=m,r=r+this.B_re[b]*p-this.B_im[b]*q,s=s+this.B_im[b]*p+this.B_re[b]*q;return a.x=s*this.a+this.x0,a.y=r*this.a+this.y0,a},c.inverse=function(a){var b,c,e,f=a.x,g=a.y,h=f-this.x0,i=g-this.y0,j=i/this.a,k=h/this.a,l=1,m=0,n=0,o=0;for(b=1;6>=b;b++)c=l*j-m*k,e=m*j+l*k,l=c,m=e,n=n+this.C_re[b]*l-this.C_im[b]*m,o=o+this.C_im[b]*l+this.C_re[b]*m;for(var p=0;p<this.iterations;p++){var q,r,s=n,t=o,u=j,v=k;for(b=2;6>=b;b++)q=s*n-t*o,r=t*n+s*o,s=q,t=r,u+=(b-1)*(this.B_re[b]*s-this.B_im[b]*t),v+=(b-1)*(this.B_im[b]*s+this.B_re[b]*t);s=1,t=0;var w=this.B_re[1],x=this.B_im[1];for(b=2;6>=b;b++)q=s*n-t*o,r=t*n+s*o,s=q,t=r,w+=b*(this.B_re[b]*s-this.B_im[b]*t),x+=b*(this.B_im[b]*s+this.B_re[b]*t);var y=w*w+x*x;n=(u*w+v*x)/y,o=(v*w-u*x)/y}var z=n,A=o,B=1,C=0;for(b=1;9>=b;b++)B*=z,C+=this.D[b]*B;var D=this.lat0+C*d*1e5,E=this.long0+A;return a.x=E,a.y=D,a},c.names=["New_Zealand_Map_Grid","nzmg"]},{}],57:[function(a,b,c){var d=a("../common/tsfnz"),e=a("../common/adjust_lon"),f=a("../common/phi2z"),g=Math.PI/2,h=Math.PI/4,i=1e-10;c.init=function(){this.no_off=this.no_off||!1,this.no_rot=this.no_rot||!1,isNaN(this.k0)&&(this.k0=1);var a=Math.sin(this.lat0),b=Math.cos(this.lat0),c=this.e*a;this.bl=Math.sqrt(1+this.es/(1-this.es)*Math.pow(b,4)),this.al=this.a*this.bl*this.k0*Math.sqrt(1-this.es)/(1-c*c);var f=d(this.e,this.lat0,a),g=this.bl/b*Math.sqrt((1-this.es)/(1-c*c));1>g*g&&(g=1);var h,i;if(isNaN(this.longc)){var j=d(this.e,this.lat1,Math.sin(this.lat1)),k=d(this.e,this.lat2,Math.sin(this.lat2));this.lat0>=0?this.el=(g+Math.sqrt(g*g-1))*Math.pow(f,this.bl):this.el=(g-Math.sqrt(g*g-1))*Math.pow(f,this.bl);var l=Math.pow(j,this.bl),m=Math.pow(k,this.bl);h=this.el/l,i=.5*(h-1/h);var n=(this.el*this.el-m*l)/(this.el*this.el+m*l),o=(m-l)/(m+l),p=e(this.long1-this.long2);this.long0=.5*(this.long1+this.long2)-Math.atan(n*Math.tan(.5*this.bl*p)/o)/this.bl,this.long0=e(this.long0);var q=e(this.long1-this.long0);this.gamma0=Math.atan(Math.sin(this.bl*q)/i),this.alpha=Math.asin(g*Math.sin(this.gamma0))}else h=this.lat0>=0?g+Math.sqrt(g*g-1):g-Math.sqrt(g*g-1),this.el=h*Math.pow(f,this.bl),i=.5*(h-1/h),this.gamma0=Math.asin(Math.sin(this.alpha)/g),this.long0=this.longc-Math.asin(i*Math.tan(this.gamma0))/this.bl;this.no_off?this.uc=0:this.lat0>=0?this.uc=this.al/this.bl*Math.atan2(Math.sqrt(g*g-1),Math.cos(this.alpha)):this.uc=-1*this.al/this.bl*Math.atan2(Math.sqrt(g*g-1),Math.cos(this.alpha))},c.forward=function(a){var b,c,f,j=a.x,k=a.y,l=e(j-this.long0);if(Math.abs(Math.abs(k)-g)<=i)f=k>0?-1:1,c=this.al/this.bl*Math.log(Math.tan(h+f*this.gamma0*.5)),b=-1*f*g*this.al/this.bl;else{var m=d(this.e,k,Math.sin(k)),n=this.el/Math.pow(m,this.bl),o=.5*(n-1/n),p=.5*(n+1/n),q=Math.sin(this.bl*l),r=(o*Math.sin(this.gamma0)-q*Math.cos(this.gamma0))/p;c=Math.abs(Math.abs(r)-1)<=i?Number.POSITIVE_INFINITY:.5*this.al*Math.log((1-r)/(1+r))/this.bl,b=Math.abs(Math.cos(this.bl*l))<=i?this.al*this.bl*l:this.al*Math.atan2(o*Math.cos(this.gamma0)+q*Math.sin(this.gamma0),Math.cos(this.bl*l))/this.bl}return this.no_rot?(a.x=this.x0+b,a.y=this.y0+c):(b-=this.uc,a.x=this.x0+c*Math.cos(this.alpha)+b*Math.sin(this.alpha),a.y=this.y0+b*Math.cos(this.alpha)-c*Math.sin(this.alpha)),a},c.inverse=function(a){var b,c;this.no_rot?(c=a.y-this.y0,b=a.x-this.x0):(c=(a.x-this.x0)*Math.cos(this.alpha)-(a.y-this.y0)*Math.sin(this.alpha),b=(a.y-this.y0)*Math.cos(this.alpha)+(a.x-this.x0)*Math.sin(this.alpha),b+=this.uc);var d=Math.exp(-1*this.bl*c/this.al),h=.5*(d-1/d),j=.5*(d+1/d),k=Math.sin(this.bl*b/this.al),l=(k*Math.cos(this.gamma0)+h*Math.sin(this.gamma0))/j,m=Math.pow(this.el/Math.sqrt((1+l)/(1-l)),1/this.bl);return Math.abs(l-1)<i?(a.x=this.long0,a.y=g):Math.abs(l+1)<i?(a.x=this.long0,a.y=-1*g):(a.y=f(this.e,m),a.x=e(this.long0-Math.atan2(h*Math.cos(this.gamma0)-k*Math.sin(this.gamma0),Math.cos(this.bl*b/this.al))/this.bl)),a},c.names=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","omerc"]},{"../common/adjust_lon":5,"../common/phi2z":16,"../common/tsfnz":24}],58:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/adjust_lon"),i=a("../common/adjust_lat"),j=a("../common/mlfn"),k=1e-10,l=a("../common/gN"),m=20;c.init=function(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.ml0=this.a*j(this.e0,this.e1,this.e2,this.e3,this.lat0)},c.forward=function(a){var b,c,d,e=a.x,f=a.y,g=h(e-this.long0);if(d=g*Math.sin(f),this.sphere)Math.abs(f)<=k?(b=this.a*g,c=-1*this.a*this.lat0):(b=this.a*Math.sin(d)/Math.tan(f),c=this.a*(i(f-this.lat0)+(1-Math.cos(d))/Math.tan(f)));else if(Math.abs(f)<=k)b=this.a*g,c=-1*this.ml0;else{var m=l(this.a,this.e,Math.sin(f))/Math.tan(f);b=m*Math.sin(d),c=this.a*j(this.e0,this.e1,this.e2,this.e3,f)-this.ml0+m*(1-Math.cos(d))}return a.x=b+this.x0,a.y=c+this.y0,a},c.inverse=function(a){var b,c,d,e,f,g,i,l,n;if(d=a.x-this.x0,e=a.y-this.y0,this.sphere)if(Math.abs(e+this.a*this.lat0)<=k)b=h(d/this.a+this.long0),c=0;else{g=this.lat0+e/this.a,i=d*d/this.a/this.a+g*g,l=g;var o;for(f=m;f;--f)if(o=Math.tan(l),n=-1*(g*(l*o+1)-l-.5*(l*l+i)*o)/((l-g)/o-1),l+=n,Math.abs(n)<=k){c=l;break}b=h(this.long0+Math.asin(d*Math.tan(l)/this.a)/Math.sin(c))}else if(Math.abs(e+this.ml0)<=k)c=0,b=h(this.long0+d/this.a);else{g=(this.ml0+e)/this.a,i=d*d/this.a/this.a+g*g,l=g;var p,q,r,s,t;for(f=m;f;--f)if(t=this.e*Math.sin(l),p=Math.sqrt(1-t*t)*Math.tan(l),q=this.a*j(this.e0,this.e1,this.e2,this.e3,l),r=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),s=q/this.a,n=(g*(p*s+1)-s-.5*p*(s*s+i))/(this.es*Math.sin(2*l)*(s*s+i-2*g*s)/(4*p)+(g-s)*(p*r-2/Math.sin(2*l))-r),l-=n,Math.abs(n)<=k){c=l;break}p=Math.sqrt(1-this.es*Math.pow(Math.sin(c),2))*Math.tan(c),b=h(this.long0+Math.asin(d*p/this.a)/Math.sin(c))}return a.x=b,a.y=c,a},c.names=["Polyconic","poly"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/mlfn":14}],59:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/adjust_lat"),f=a("../common/pj_enfn"),g=20,h=a("../common/pj_mlfn"),i=a("../common/pj_inv_mlfn"),j=Math.PI/2,k=1e-10,l=a("../common/asinz");c.init=function(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=f(this.es)},c.forward=function(a){var b,c,e=a.x,f=a.y;if(e=d(e-this.long0),this.sphere){if(this.m)for(var i=this.n*Math.sin(f),j=g;j;--j){var l=(this.m*f+Math.sin(f)-i)/(this.m+Math.cos(f));if(f-=l,Math.abs(l)<k)break}else f=1!==this.n?Math.asin(this.n*Math.sin(f)):f;b=this.a*this.C_x*e*(this.m+Math.cos(f)),c=this.a*this.C_y*f}else{var m=Math.sin(f),n=Math.cos(f);c=this.a*h(f,m,n,this.en),b=this.a*e*n/Math.sqrt(1-this.es*m*m)}return a.x=b,a.y=c,a},c.inverse=function(a){var b,c,f,g;return a.x-=this.x0,f=a.x/this.a,a.y-=this.y0,b=a.y/this.a,this.sphere?(b/=this.C_y,f/=this.C_x*(this.m+Math.cos(b)),this.m?b=l((this.m*b+Math.sin(b))/this.n):1!==this.n&&(b=l(Math.sin(b)/this.n)),f=d(f+this.long0),b=e(b)):(b=i(a.y/this.a,this.es,this.en),g=Math.abs(b),j>g?(g=Math.sin(b),c=this.long0+a.x*Math.sqrt(1-this.es*g*g)/(this.a*Math.cos(b)),f=d(c)):j>g-k&&(f=this.long0)),a.x=f,a.y=b,a},c.names=["Sinusoidal","sinu"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/asinz":6,"../common/pj_enfn":17,"../common/pj_inv_mlfn":18,"../common/pj_mlfn":19}],60:[function(a,b,c){c.init=function(){var a=this.lat0;this.lambda0=this.long0;var b=Math.sin(a),c=this.a,d=this.rf,e=1/d,f=2*e-Math.pow(e,2),g=this.e=Math.sqrt(f);this.R=this.k0*c*Math.sqrt(1-f)/(1-f*Math.pow(b,2)),this.alpha=Math.sqrt(1+f/(1-f)*Math.pow(Math.cos(a),4)),this.b0=Math.asin(b/this.alpha);var h=Math.log(Math.tan(Math.PI/4+this.b0/2)),i=Math.log(Math.tan(Math.PI/4+a/2)),j=Math.log((1+g*b)/(1-g*b));this.K=h-this.alpha*i+this.alpha*g/2*j},c.forward=function(a){var b=Math.log(Math.tan(Math.PI/4-a.y/2)),c=this.e/2*Math.log((1+this.e*Math.sin(a.y))/(1-this.e*Math.sin(a.y))),d=-this.alpha*(b+c)+this.K,e=2*(Math.atan(Math.exp(d))-Math.PI/4),f=this.alpha*(a.x-this.lambda0),g=Math.atan(Math.sin(f)/(Math.sin(this.b0)*Math.tan(e)+Math.cos(this.b0)*Math.cos(f))),h=Math.asin(Math.cos(this.b0)*Math.sin(e)-Math.sin(this.b0)*Math.cos(e)*Math.cos(f));return a.y=this.R/2*Math.log((1+Math.sin(h))/(1-Math.sin(h)))+this.y0,a.x=this.R*g+this.x0,a},c.inverse=function(a){for(var b=a.x-this.x0,c=a.y-this.y0,d=b/this.R,e=2*(Math.atan(Math.exp(c/this.R))-Math.PI/4),f=Math.asin(Math.cos(this.b0)*Math.sin(e)+Math.sin(this.b0)*Math.cos(e)*Math.cos(d)),g=Math.atan(Math.sin(d)/(Math.cos(this.b0)*Math.cos(d)-Math.sin(this.b0)*Math.tan(e))),h=this.lambda0+g/this.alpha,i=0,j=f,k=-1e3,l=0;Math.abs(j-k)>1e-7;){if(++l>20)return;i=1/this.alpha*(Math.log(Math.tan(Math.PI/4+f/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(j))/2)),k=j,j=2*Math.atan(Math.exp(i))-Math.PI/2}return a.x=h,a.y=j,a},c.names=["somerc"]},{}],61:[function(a,b,c){var d=Math.PI/2,e=1e-10,f=a("../common/sign"),g=a("../common/msfnz"),h=a("../common/tsfnz"),i=a("../common/phi2z"),j=a("../common/adjust_lon");c.ssfn_=function(a,b,c){return b*=c,Math.tan(.5*(d+a))*Math.pow((1-b)/(1+b),.5*c)},c.init=function(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=e&&(this.k0=.5*(1+f(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=e&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=e&&(this.k0=.5*this.cons*g(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/h(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=g(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-d,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))},c.forward=function(a){var b,c,f,g,i,k,l=a.x,m=a.y,n=Math.sin(m),o=Math.cos(m),p=j(l-this.long0);return Math.abs(Math.abs(l-this.long0)-Math.PI)<=e&&Math.abs(m+this.lat0)<=e?(a.x=NaN,a.y=NaN,a):this.sphere?(b=2*this.k0/(1+this.sinlat0*n+this.coslat0*o*Math.cos(p)),a.x=this.a*b*o*Math.sin(p)+this.x0,a.y=this.a*b*(this.coslat0*n-this.sinlat0*o*Math.cos(p))+this.y0,a):(c=2*Math.atan(this.ssfn_(m,n,this.e))-d,g=Math.cos(c),f=Math.sin(c),Math.abs(this.coslat0)<=e?(i=h(this.e,m*this.con,this.con*n),k=2*this.a*this.k0*i/this.cons,a.x=this.x0+k*Math.sin(l-this.long0),a.y=this.y0-this.con*k*Math.cos(l-this.long0),a):(Math.abs(this.sinlat0)<e?(b=2*this.a*this.k0/(1+g*Math.cos(p)),a.y=b*f):(b=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*f+this.cosX0*g*Math.cos(p))),a.y=b*(this.cosX0*f-this.sinX0*g*Math.cos(p))+this.y0),a.x=b*g*Math.sin(p)+this.x0,a))},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,f,g,h,k=Math.sqrt(a.x*a.x+a.y*a.y);if(this.sphere){var l=2*Math.atan(k/(.5*this.a*this.k0));return b=this.long0,c=this.lat0,e>=k?(a.x=b,a.y=c,a):(c=Math.asin(Math.cos(l)*this.sinlat0+a.y*Math.sin(l)*this.coslat0/k),b=j(Math.abs(this.coslat0)<e?this.lat0>0?this.long0+Math.atan2(a.x,-1*a.y):this.long0+Math.atan2(a.x,a.y):this.long0+Math.atan2(a.x*Math.sin(l),k*this.coslat0*Math.cos(l)-a.y*this.sinlat0*Math.sin(l))),a.x=b,a.y=c,a)}if(Math.abs(this.coslat0)<=e){if(e>=k)return c=this.lat0,b=this.long0,a.x=b,a.y=c,a;a.x*=this.con,a.y*=this.con,f=k*this.cons/(2*this.a*this.k0),c=this.con*i(this.e,f),b=this.con*j(this.con*this.long0+Math.atan2(a.x,-1*a.y))}else g=2*Math.atan(k*this.cosX0/(2*this.a*this.k0*this.ms1)),b=this.long0,e>=k?h=this.X0:(h=Math.asin(Math.cos(g)*this.sinX0+a.y*Math.sin(g)*this.cosX0/k),b=j(this.long0+Math.atan2(a.x*Math.sin(g),k*this.cosX0*Math.cos(g)-a.y*this.sinX0*Math.sin(g)))),c=-1*i(this.e,Math.tan(.5*(d+h)));return a.x=b,a.y=c,a},c.names=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"]},{"../common/adjust_lon":5,"../common/msfnz":15,"../common/phi2z":16,"../common/sign":21,"../common/tsfnz":24}],62:[function(a,b,c){var d=a("./gauss"),e=a("../common/adjust_lon");c.init=function(){d.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))},c.forward=function(a){var b,c,f,g;return a.x=e(a.x-this.long0),d.forward.apply(this,[a]),b=Math.sin(a.y),c=Math.cos(a.y),f=Math.cos(a.x),g=this.k0*this.R2/(1+this.sinc0*b+this.cosc0*c*f),a.x=g*c*Math.sin(a.x),a.y=g*(this.cosc0*b-this.sinc0*c*f),a.x=this.a*a.x+this.x0,a.y=this.a*a.y+this.y0,a},c.inverse=function(a){var b,c,f,g,h;if(a.x=(a.x-this.x0)/this.a,a.y=(a.y-this.y0)/this.a,a.x/=this.k0,a.y/=this.k0,h=Math.sqrt(a.x*a.x+a.y*a.y)){var i=2*Math.atan2(h,this.R2);b=Math.sin(i),c=Math.cos(i),g=Math.asin(c*this.sinc0+a.y*b*this.cosc0/h),f=Math.atan2(a.x*b,h*this.cosc0*c-a.y*this.sinc0*b)}else g=this.phic0,f=0;return a.x=f,a.y=g,d.inverse.apply(this,[a]),a.x=e(a.x+this.long0),a},c.names=["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative"]},{"../common/adjust_lon":5,"./gauss":46}],63:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/mlfn"),i=a("../common/adjust_lon"),j=Math.PI/2,k=1e-10,l=a("../common/sign"),m=a("../common/asinz");c.init=function(){this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.ml0=this.a*h(this.e0,this.e1,this.e2,this.e3,this.lat0)},c.forward=function(a){var b,c,d,e=a.x,f=a.y,g=i(e-this.long0),j=Math.sin(f),k=Math.cos(f);if(this.sphere){var l=k*Math.sin(g);if(Math.abs(Math.abs(l)-1)<1e-10)return 93;c=.5*this.a*this.k0*Math.log((1+l)/(1-l)),b=Math.acos(k*Math.cos(g)/Math.sqrt(1-l*l)),0>f&&(b=-b),d=this.a*this.k0*(b-this.lat0)}else{var m=k*g,n=Math.pow(m,2),o=this.ep2*Math.pow(k,2),p=Math.tan(f),q=Math.pow(p,2);b=1-this.es*Math.pow(j,2);var r=this.a/Math.sqrt(b),s=this.a*h(this.e0,this.e1,this.e2,this.e3,f);c=this.k0*r*m*(1+n/6*(1-q+o+n/20*(5-18*q+Math.pow(q,2)+72*o-58*this.ep2)))+this.x0,d=this.k0*(s-this.ml0+r*p*(n*(.5+n/24*(5-q+9*o+4*Math.pow(o,2)+n/30*(61-58*q+Math.pow(q,2)+600*o-330*this.ep2)))))+this.y0}return a.x=c,a.y=d,a},c.inverse=function(a){var b,c,d,e,f,g,h=6;if(this.sphere){var n=Math.exp(a.x/(this.a*this.k0)),o=.5*(n-1/n),p=this.lat0+a.y/(this.a*this.k0),q=Math.cos(p);b=Math.sqrt((1-q*q)/(1+o*o)),f=m(b),0>p&&(f=-f),g=0===o&&0===q?this.long0:i(Math.atan2(o,q)+this.long0)}else{var r=a.x-this.x0,s=a.y-this.y0;for(b=(this.ml0+s/this.k0)/this.a,c=b,e=0;!0&&(d=(b+this.e1*Math.sin(2*c)-this.e2*Math.sin(4*c)+this.e3*Math.sin(6*c))/this.e0-c,c+=d,!(Math.abs(d)<=k));e++)if(e>=h)return 95;if(Math.abs(c)<j){var t=Math.sin(c),u=Math.cos(c),v=Math.tan(c),w=this.ep2*Math.pow(u,2),x=Math.pow(w,2),y=Math.pow(v,2),z=Math.pow(y,2);b=1-this.es*Math.pow(t,2);var A=this.a/Math.sqrt(b),B=A*(1-this.es)/b,C=r/(A*this.k0),D=Math.pow(C,2);f=c-A*v*D/B*(.5-D/24*(5+3*y+10*w-4*x-9*this.ep2-D/30*(61+90*y+298*w+45*z-252*this.ep2-3*x))),g=i(this.long0+C*(1-D/6*(1+2*y+w-D/20*(5-2*w+28*y-3*x+8*this.ep2+24*z)))/u)}else f=j*l(s),g=this.long0}return a.x=g,a.y=f,a},c.names=["Transverse_Mercator","Transverse Mercator","tmerc"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/mlfn":14,"../common/sign":21}],64:[function(a,b,c){var d=.017453292519943295,e=a("./tmerc");c.dependsOn="tmerc",c.init=function(){this.zone&&(this.lat0=0,this.long0=(6*Math.abs(this.zone)-183)*d,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,e.init.apply(this),this.forward=e.forward,this.inverse=e.inverse)},c.names=["Universal Transverse Mercator System","utm"]},{"./tmerc":63}],65:[function(a,b,c){var d=a("../common/adjust_lon"),e=Math.PI/2,f=1e-10,g=a("../common/asinz");c.init=function(){this.R=this.a},c.forward=function(a){var b,c,h=a.x,i=a.y,j=d(h-this.long0);Math.abs(i)<=f&&(b=this.x0+this.R*j,c=this.y0);var k=g(2*Math.abs(i/Math.PI));(Math.abs(j)<=f||Math.abs(Math.abs(i)-e)<=f)&&(b=this.x0,c=i>=0?this.y0+Math.PI*this.R*Math.tan(.5*k):this.y0+Math.PI*this.R*-Math.tan(.5*k));var l=.5*Math.abs(Math.PI/j-j/Math.PI),m=l*l,n=Math.sin(k),o=Math.cos(k),p=o/(n+o-1),q=p*p,r=p*(2/n-1),s=r*r,t=Math.PI*this.R*(l*(p-s)+Math.sqrt(m*(p-s)*(p-s)-(s+m)*(q-s)))/(s+m);0>j&&(t=-t),b=this.x0+t;var u=m+p;return t=Math.PI*this.R*(r*u-l*Math.sqrt((s+m)*(m+1)-u*u))/(s+m),c=i>=0?this.y0+t:this.y0-t,a.x=b,a.y=c,a},c.inverse=function(a){var b,c,e,g,h,i,j,k,l,m,n,o,p;return a.x-=this.x0,a.y-=this.y0,n=Math.PI*this.R,e=a.x/n,g=a.y/n,h=e*e+g*g,i=-Math.abs(g)*(1+h),j=i-2*g*g+e*e,k=-2*i+1+2*g*g+h*h,p=g*g/k+(2*j*j*j/k/k/k-9*i*j/k/k)/27,l=(i-j*j/3/k)/k,m=2*Math.sqrt(-l/3),n=3*p/l/m,Math.abs(n)>1&&(n=n>=0?1:-1),o=Math.acos(n)/3,c=a.y>=0?(-m*Math.cos(o+Math.PI/3)-j/3/k)*Math.PI:-(-m*Math.cos(o+Math.PI/3)-j/3/k)*Math.PI,b=Math.abs(e)<f?this.long0:d(this.long0+Math.PI*(h-1+Math.sqrt(1+2*(e*e-g*g)+h*h))/2/e),a.x=b,a.y=c,a},c.names=["Van_der_Grinten_I","VanDerGrinten","vandg"]},{"../common/adjust_lon":5,"../common/asinz":6}],66:[function(a,b,c){var d=.017453292519943295,e=57.29577951308232,f=1,g=2,h=a("./datum_transform"),i=a("./adjust_axis"),j=a("./Proj"),k=a("./common/toPoint");b.exports=function l(a,b,c){function m(a,b){return(a.datum.datum_type===f||a.datum.datum_type===g)&&"WGS84"!==b.datumCode}var n;return Array.isArray(c)&&(c=k(c)),a.datum&&b.datum&&(m(a,b)||m(b,a))&&(n=new j("WGS84"),l(a,n,c),a=n),"enu"!==a.axis&&i(a,!1,c),"longlat"===a.projName?(c.x*=d,c.y*=d):a.isGeocent?(a.to_meter&&(c.x*=a.to_meter,c.y*=a.to_meter,c.z*=a.to_meter),b.datum.geocentric_to_geodetic_noniter(c)):(a.to_meter&&(c.x*=a.to_meter,c.y*=a.to_meter),a.inverse(c)),a.from_greenwich&&(c.x+=a.from_greenwich),c=h(a.datum,b.datum,c),b.from_greenwich&&(c.x-=b.from_greenwich),"longlat"===b.projName?(c.x*=e,c.y*=e):b.isGeocent?(b.datum.geodetic_to_geocentric(c),b.to_meter&&(c.x/=b.to_meter,c.y/=b.to_meter,c.z/=b.to_meter)):(b.forward(c),b.to_meter&&(c.x/=b.to_meter,c.y/=b.to_meter)),"enu"!==b.axis&&i(b,!0,c),c}},{"./Proj":2,"./adjust_axis":3,"./common/toPoint":23,"./datum_transform":31}],67:[function(a,b,c){function d(a,b,c){a[b]=c.map(function(a){var b={};return e(a,b),b}).reduce(function(a,b){return j(a,b)},{})}function e(a,b){var c;return Array.isArray(a)?(c=a.shift(),"PARAMETER"===c&&(c=a.shift()),1===a.length?Array.isArray(a[0])?(b[c]={},e(a[0],b[c])):b[c]=a[0]:a.length?"TOWGS84"===c?b[c]=a:(b[c]={},["UNIT","PRIMEM","VERT_DATUM"].indexOf(c)>-1?(b[c]={name:a[0].toLowerCase(),convert:a[1]},3===a.length&&(b[c].auth=a[2])):"SPHEROID"===c?(b[c]={name:a[0],a:a[1],rf:a[2]},4===a.length&&(b[c].auth=a[3])):["GEOGCS","GEOCCS","DATUM","VERT_CS","COMPD_CS","LOCAL_CS","FITTED_CS","LOCAL_DATUM"].indexOf(c)>-1?(a[0]=["name",a[0]],d(b,c,a)):a.every(function(a){return Array.isArray(a)})?d(b,c,a):e(a,b[c])):b[c]=!0,
void 0):void(b[a]=!0)}function f(a,b){var c=b[0],d=b[1];!(c in a)&&d in a&&(a[c]=a[d],3===b.length&&(a[c]=b[2](a[c])))}function g(a){return a*i}function h(a){function b(b){var c=a.to_meter||1;return parseFloat(b,10)*c}"GEOGCS"===a.type?a.projName="longlat":"LOCAL_CS"===a.type?(a.projName="identity",a.local=!0):"object"==typeof a.PROJECTION?a.projName=Object.keys(a.PROJECTION)[0]:a.projName=a.PROJECTION,a.UNIT&&(a.units=a.UNIT.name.toLowerCase(),"metre"===a.units&&(a.units="meter"),a.UNIT.convert&&(a.to_meter=parseFloat(a.UNIT.convert,10))),a.GEOGCS&&(a.GEOGCS.DATUM?a.datumCode=a.GEOGCS.DATUM.name.toLowerCase():a.datumCode=a.GEOGCS.name.toLowerCase(),"d_"===a.datumCode.slice(0,2)&&(a.datumCode=a.datumCode.slice(2)),("new_zealand_geodetic_datum_1949"===a.datumCode||"new_zealand_1949"===a.datumCode)&&(a.datumCode="nzgd49"),"wgs_1984"===a.datumCode&&("Mercator_Auxiliary_Sphere"===a.PROJECTION&&(a.sphere=!0),a.datumCode="wgs84"),"_ferro"===a.datumCode.slice(-6)&&(a.datumCode=a.datumCode.slice(0,-6)),"_jakarta"===a.datumCode.slice(-8)&&(a.datumCode=a.datumCode.slice(0,-8)),~a.datumCode.indexOf("belge")&&(a.datumCode="rnb72"),a.GEOGCS.DATUM&&a.GEOGCS.DATUM.SPHEROID&&(a.ellps=a.GEOGCS.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===a.ellps.toLowerCase().slice(0,13)&&(a.ellps="intl"),a.a=a.GEOGCS.DATUM.SPHEROID.a,a.rf=parseFloat(a.GEOGCS.DATUM.SPHEROID.rf,10)),~a.datumCode.indexOf("osgb_1936")&&(a.datumCode="osgb36")),a.b&&!isFinite(a.b)&&(a.b=a.a);var c=function(b){return f(a,b)},d=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_2","Standard_Parallel_2"],["false_easting","False_Easting"],["false_northing","False_Northing"],["central_meridian","Central_Meridian"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",g],["longitude_of_center","Longitude_Of_Center"],["longc","longitude_of_center",g],["x0","false_easting",b],["y0","false_northing",b],["long0","central_meridian",g],["lat0","latitude_of_origin",g],["lat0","standard_parallel_1",g],["lat1","standard_parallel_1",g],["lat2","standard_parallel_2",g],["alpha","azimuth",g],["srsCode","name"]];d.forEach(c),a.long0||!a.longc||"Albers_Conic_Equal_Area"!==a.projName&&"Lambert_Azimuthal_Equal_Area"!==a.projName||(a.long0=a.longc),a.lat_ts||!a.lat1||"Stereographic_South_Pole"!==a.projName&&"Polar Stereographic (variant B)"!==a.projName||(a.lat0=g(a.lat1>0?90:-90),a.lat_ts=a.lat1)}var i=.017453292519943295,j=a("./extend");b.exports=function(a,b){var c=JSON.parse((","+a).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g,',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g,',"$1"]').replace(/,\["VERTCS".+/,"")),d=c.shift(),f=c.shift();c.unshift(["name",f]),c.unshift(["type",d]),c.unshift("output");var g={};return e(c,g),h(g.output),j(b,g.output)}},{"./extend":34}],68:[function(a,b,c){function d(a){return a*(Math.PI/180)}function e(a){return 180*(a/Math.PI)}function f(a){var b,c,e,f,g,i,j,k,l,m=a.lat,n=a.lon,o=6378137,p=.00669438,q=.9996,r=d(m),s=d(n);l=Math.floor((n+180)/6)+1,180===n&&(l=60),m>=56&&64>m&&n>=3&&12>n&&(l=32),m>=72&&84>m&&(n>=0&&9>n?l=31:n>=9&&21>n?l=33:n>=21&&33>n?l=35:n>=33&&42>n&&(l=37)),b=6*(l-1)-180+3,k=d(b),c=p/(1-p),e=o/Math.sqrt(1-p*Math.sin(r)*Math.sin(r)),f=Math.tan(r)*Math.tan(r),g=c*Math.cos(r)*Math.cos(r),i=Math.cos(r)*(s-k),j=o*((1-p/4-3*p*p/64-5*p*p*p/256)*r-(3*p/8+3*p*p/32+45*p*p*p/1024)*Math.sin(2*r)+(15*p*p/256+45*p*p*p/1024)*Math.sin(4*r)-35*p*p*p/3072*Math.sin(6*r));var t=q*e*(i+(1-f+g)*i*i*i/6+(5-18*f+f*f+72*g-58*c)*i*i*i*i*i/120)+5e5,u=q*(j+e*Math.tan(r)*(i*i/2+(5-f+9*g+4*g*g)*i*i*i*i/24+(61-58*f+f*f+600*g-330*c)*i*i*i*i*i*i/720));return 0>m&&(u+=1e7),{northing:Math.round(u),easting:Math.round(t),zoneNumber:l,zoneLetter:h(m)}}function g(a){var b=a.northing,c=a.easting,d=a.zoneLetter,f=a.zoneNumber;if(0>f||f>60)return null;var h,i,j,k,l,m,n,o,p,q,r=.9996,s=6378137,t=.00669438,u=(1-Math.sqrt(1-t))/(1+Math.sqrt(1-t)),v=c-5e5,w=b;"N">d&&(w-=1e7),o=6*(f-1)-180+3,h=t/(1-t),n=w/r,p=n/(s*(1-t/4-3*t*t/64-5*t*t*t/256)),q=p+(3*u/2-27*u*u*u/32)*Math.sin(2*p)+(21*u*u/16-55*u*u*u*u/32)*Math.sin(4*p)+151*u*u*u/96*Math.sin(6*p),i=s/Math.sqrt(1-t*Math.sin(q)*Math.sin(q)),j=Math.tan(q)*Math.tan(q),k=h*Math.cos(q)*Math.cos(q),l=s*(1-t)/Math.pow(1-t*Math.sin(q)*Math.sin(q),1.5),m=v/(i*r);var x=q-i*Math.tan(q)/l*(m*m/2-(5+3*j+10*k-4*k*k-9*h)*m*m*m*m/24+(61+90*j+298*k+45*j*j-252*h-3*k*k)*m*m*m*m*m*m/720);x=e(x);var y=(m-(1+2*j+k)*m*m*m/6+(5-2*k+28*j-3*k*k+8*h+24*j*j)*m*m*m*m*m/120)/Math.cos(q);y=o+e(y);var z;if(a.accuracy){var A=g({northing:a.northing+a.accuracy,easting:a.easting+a.accuracy,zoneLetter:a.zoneLetter,zoneNumber:a.zoneNumber});z={top:A.lat,right:A.lon,bottom:x,left:y}}else z={lat:x,lon:y};return z}function h(a){var b="Z";return 84>=a&&a>=72?b="X":72>a&&a>=64?b="W":64>a&&a>=56?b="V":56>a&&a>=48?b="U":48>a&&a>=40?b="T":40>a&&a>=32?b="S":32>a&&a>=24?b="R":24>a&&a>=16?b="Q":16>a&&a>=8?b="P":8>a&&a>=0?b="N":0>a&&a>=-8?b="M":-8>a&&a>=-16?b="L":-16>a&&a>=-24?b="K":-24>a&&a>=-32?b="J":-32>a&&a>=-40?b="H":-40>a&&a>=-48?b="G":-48>a&&a>=-56?b="F":-56>a&&a>=-64?b="E":-64>a&&a>=-72?b="D":-72>a&&a>=-80&&(b="C"),b}function i(a,b){var c=""+a.easting,d=""+a.northing;return a.zoneNumber+a.zoneLetter+j(a.easting,a.northing,a.zoneNumber)+c.substr(c.length-5,b)+d.substr(d.length-5,b)}function j(a,b,c){var d=k(c),e=Math.floor(a/1e5),f=Math.floor(b/1e5)%20;return l(e,f,d)}function k(a){var b=a%q;return 0===b&&(b=q),b}function l(a,b,c){var d=c-1,e=r.charCodeAt(d),f=s.charCodeAt(d),g=e+a-1,h=f+b,i=!1;g>x&&(g=g-x+t-1,i=!0),(g===u||u>e&&g>u||(g>u||u>e)&&i)&&g++,(g===v||v>e&&g>v||(g>v||v>e)&&i)&&(g++,g===u&&g++),g>x&&(g=g-x+t-1),h>w?(h=h-w+t-1,i=!0):i=!1,(h===u||u>f&&h>u||(h>u||u>f)&&i)&&h++,(h===v||v>f&&h>v||(h>v||v>f)&&i)&&(h++,h===u&&h++),h>w&&(h=h-w+t-1);var j=String.fromCharCode(g)+String.fromCharCode(h);return j}function m(a){if(a&&0===a.length)throw"MGRSPoint coverting from nothing";for(var b,c=a.length,d=null,e="",f=0;!/[A-Z]/.test(b=a.charAt(f));){if(f>=2)throw"MGRSPoint bad conversion from: "+a;e+=b,f++}var g=parseInt(e,10);if(0===f||f+3>c)throw"MGRSPoint bad conversion from: "+a;var h=a.charAt(f++);if("A">=h||"B"===h||"Y"===h||h>="Z"||"I"===h||"O"===h)throw"MGRSPoint zone letter "+h+" not handled: "+a;d=a.substring(f,f+=2);for(var i=k(g),j=n(d.charAt(0),i),l=o(d.charAt(1),i);l<p(h);)l+=2e6;var m=c-f;if(m%2!==0)throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+a;var q,r,s,t,u,v=m/2,w=0,x=0;return v>0&&(q=1e5/Math.pow(10,v),r=a.substring(f,f+v),w=parseFloat(r)*q,s=a.substring(f+v),x=parseFloat(s)*q),t=w+j,u=x+l,{easting:t,northing:u,zoneLetter:h,zoneNumber:g,accuracy:q}}function n(a,b){for(var c=r.charCodeAt(b-1),d=1e5,e=!1;c!==a.charCodeAt(0);){if(c++,c===u&&c++,c===v&&c++,c>x){if(e)throw"Bad character: "+a;c=t,e=!0}d+=1e5}return d}function o(a,b){if(a>"V")throw"MGRSPoint given invalid Northing "+a;for(var c=s.charCodeAt(b-1),d=0,e=!1;c!==a.charCodeAt(0);){if(c++,c===u&&c++,c===v&&c++,c>w){if(e)throw"Bad character: "+a;c=t,e=!0}d+=1e5}return d}function p(a){var b;switch(a){case"C":b=11e5;break;case"D":b=2e6;break;case"E":b=28e5;break;case"F":b=37e5;break;case"G":b=46e5;break;case"H":b=55e5;break;case"J":b=64e5;break;case"K":b=73e5;break;case"L":b=82e5;break;case"M":b=91e5;break;case"N":b=0;break;case"P":b=8e5;break;case"Q":b=17e5;break;case"R":b=26e5;break;case"S":b=35e5;break;case"T":b=44e5;break;case"U":b=53e5;break;case"V":b=62e5;break;case"W":b=7e6;break;case"X":b=79e5;break;default:b=-1}if(b>=0)return b;throw"Invalid zone letter: "+a}var q=6,r="AJSAJS",s="AFAFAF",t=65,u=73,v=79,w=86,x=90;c.forward=function(a,b){return b=b||5,i(f({lat:a[1],lon:a[0]}),b)},c.inverse=function(a){var b=g(m(a.toUpperCase()));return[b.left,b.bottom,b.right,b.top]},c.toPoint=function(a){var b=c.inverse(a);return[(b[2]+b[0])/2,(b[3]+b[1])/2]}},{}],69:[function(a,b,c){b.exports={name:"_mproj4_",version:"2.3.7-alpha",description:"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.",main:"lib/index.js",directories:{test:"test",doc:"docs"},scripts:{test:"./node_modules/istanbul/lib/cli.js test ./node_modules/mocha/bin/_mocha test/test.js"},repository:{type:"git",url:"git://github.com/_mproj4_js/_mproj4_js.git"},author:"",license:"MIT",jam:{main:"dist/_mproj4_.js",include:["dist/_mproj4_.js","README.md","AUTHORS","LICENSE.md"]},devDependencies:{"grunt-cli":"~0.1.13",grunt:"~0.4.2","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~0.8.0",chai:"~1.8.1",mocha:"~1.17.1","grunt-mocha-phantomjs":"~0.4.0",browserify:"~3.24.5","grunt-browserify":"~1.3.0","grunt-contrib-uglify":"~0.3.2",curl:"git://github.com/cujojs/curl.git",istanbul:"~0.2.4",tin:"~0.4.0"},dependencies:{mgrs:"0.0.0"}}},{}],"./includedProjections":[function(a,b,c){b.exports=a("Pk/iAZ")},{}],"Pk/iAZ":[function(a,b,c){var d=[a("./lib/projections/tmerc"),a("./lib/projections/utm"),a("./lib/projections/sterea"),a("./lib/projections/stere"),a("./lib/projections/somerc"),a("./lib/projections/omerc"),a("./lib/projections/lcc"),a("./lib/projections/krovak"),a("./lib/projections/cass"),a("./lib/projections/laea"),a("./lib/projections/aea"),a("./lib/projections/gnom"),a("./lib/projections/cea"),a("./lib/projections/eqc"),a("./lib/projections/poly"),a("./lib/projections/nzmg"),a("./lib/projections/mill"),a("./lib/projections/sinu"),a("./lib/projections/moll"),a("./lib/projections/eqdc"),a("./lib/projections/vandg"),a("./lib/projections/aeqd"),a("./lib/projections/geocent")];b.exports=function(_mproj4_){d.forEach(function(a){_mproj4_.Proj.projections.add(a)})}},{"./lib/projections/aea":40,"./lib/projections/aeqd":41,"./lib/projections/cass":42,"./lib/projections/cea":43,"./lib/projections/eqc":44,"./lib/projections/eqdc":45,"./lib/projections/geocent":47,"./lib/projections/gnom":48,"./lib/projections/krovak":49,"./lib/projections/laea":50,"./lib/projections/lcc":51,"./lib/projections/mill":54,"./lib/projections/moll":55,"./lib/projections/nzmg":56,"./lib/projections/omerc":57,"./lib/projections/poly":58,"./lib/projections/sinu":59,"./lib/projections/somerc":60,"./lib/projections/stere":61,"./lib/projections/sterea":62,"./lib/projections/tmerc":63,"./lib/projections/utm":64,"./lib/projections/vandg":65}]},{},[36])(36)});var GeographicLib={};GeographicLib.Constants={};GeographicLib.Math={};GeographicLib.Accumulator={};(function(c){c.WGS84={a:6378137,f:1/298.257223563};c.version={major:1,minor:45,patch:0};c.version_string="1.45"})(GeographicLib.Constants);
(function(m){m.digits=53;m.epsilon=Math.pow(.5,m.digits-1);m.degree=Math.PI/180;m.sq=function(x){return x*x};m.hypot=function(x,y){var a,b;x=Math.abs(x);y=Math.abs(y);a=Math.max(x,y);b=Math.min(x,y)/(a?a:1);return a*Math.sqrt(1+b*b)};m.cbrt=function(x){var y=Math.pow(Math.abs(x),1/3);return x<0?-y:y};m.log1p=function(x){var y=1+x,z=y-1;return z===0?x:x*Math.log(y)/z};m.atanh=function(x){var y=Math.abs(x);y=m.log1p(2*y/(1-y))/2;return x<0?-y:y};m.sum=function(u,v){var s=u+v,up=s-v,vpp=s-up,t;up-=u;
vpp-=v;t=-(up+vpp);return{s:s,t:t}};m.polyval=function(N,p,s,x){var y=N<0?0:p[s++];while(--N>=0)y=y*x+p[s++];return y};m.AngRound=function(x){var z=1/16,y=Math.abs(x);y=y<z?z-(z-y):y;return x<0?0-y:y};m.AngNormalize=function(x){x=x%360;return x<-180?x+360:x<180?x:x-360};m.LatFix=function(x){return Math.abs(x)>90?Number.NaN:x};m.AngDiff=function(x,y){var r=m.sum(m.AngNormalize(x),m.AngNormalize(-y)),d=-m.AngNormalize(r.s),t=r.t;return(d==180&&t<0?-180:d)-t};m.sincosd=function(x){var r,q,s,c,sinx,cosx;
r=x%360;q=Math.floor(r/90+.5);r-=90*q;r*=this.degree;s=Math.sin(r);c=Math.cos(r);switch(q&3){case 0:sinx=s;cosx=c;break;case 1:sinx=c;cosx=0-s;break;case 2:sinx=0-s;cosx=0-c;break;default:sinx=0-c;cosx=s;break}return{s:sinx,c:cosx}};m.atan2d=function(y,x){var q=0,t,ang;if(Math.abs(y)>Math.abs(x)){t=x;x=y;y=t;q=2}if(x<0){x=-x;++q}ang=Math.atan2(y,x)/this.degree;switch(q){case 1:ang=(y>0?180:-180)-ang;break;case 2:ang=90-ang;break;case 3:ang=-90+ang;break}return ang}})(GeographicLib.Math);
(function(a,m){a.Accumulator=function(y){this.Set(y)};a.Accumulator.prototype.Set=function(y){if(!y)y=0;if(y.constructor===a.Accumulator){this._s=y._s;this._t=y._t}else{this._s=y;this._t=0}};a.Accumulator.prototype.Add=function(y){var u=m.sum(y,this._t),v=m.sum(u.s,this._s);u=u.t;this._s=v.s;this._t=v.t;if(this._s===0)this._s=u;else this._t+=u};a.Accumulator.prototype.Sum=function(y){var b;if(!y)return this._s;else{b=new a.Accumulator(this);b.Add(y);return b._s}};a.Accumulator.prototype.Negate=function(){this._s*=
-1;this._t*=-1}})(GeographicLib.Accumulator,GeographicLib.Math);GeographicLib.DMS={};
(function(d){var lookup,zerofill,InternalDecode,NumMatch,hemispheres_="SNWE",signs_="-+",digits_="0123456789",dmsindicators_="D'\":",dmsindicatorsu_="\u00b0'\"",components_=["degrees","minutes","seconds"];lookup=function(s,c){return s.indexOf(c.toUpperCase())};zerofill=function(s,n){return String("0000").substr(0,Math.max(0,Math.min(4,n-s.length)))+s};d.NONE=0;d.LATITUDE=1;d.LONGITUDE=2;d.AZIMUTH=3;d.DEGREE=0;d.MINUTE=1;d.SECOND=2;d.Decode=function(dms){var dmsa=dms,end,v=0,i=0,mi,pi,vals,ind1=d.NONE,
ind2,p,pa,pb;dmsa=dmsa.replace(/\u00b0/g,"d").replace(/\u00ba/g,"d").replace(/\u2070/g,"d").replace(/\u02da/g,"d").replace(/\u2032/g,"'").replace(/\u00b4/g,"'").replace(/\u2019/g,"'").replace(/\u2033/g,'"').replace(/\u201d/g,'"').replace(/\u2212/g,"-").replace(/''/g,'"').trim();end=dmsa.length;for(p=0;p<end;p=pb,++i){pa=p;if(i===0&&lookup(hemispheres_,dmsa.charAt(pa))>=0)++pa;if(i>0||pa<end&&lookup(signs_,dmsa.charAt(pa))>=0)++pa;mi=dmsa.substr(pa,end-pa).indexOf("-");pi=dmsa.substr(pa,end-pa).indexOf("+");
if(mi<0)mi=end;else mi+=pa;if(pi<0)pi=end;else pi+=pa;pb=Math.min(mi,pi);vals=InternalDecode(dmsa.substr(p,pb-p));v+=vals.val;ind2=vals.ind;if(ind1==d.NONE)ind1=ind2;else if(!(ind2==d.NONE||ind1==ind2))throw new Error("Incompatible hemisphere specifies in "+dmsa.substr(0,pb));}if(i===0)throw new Error("Empty or incomplete DMS string "+dmsa);return{val:v,ind:ind1}};InternalDecode=function(dmsa){var vals={},errormsg="",sign,beg,end,ind1,k,ipieces,fpieces,npiece,icurrent,fcurrent,ncurrent,p,pointseen,
digcount,intcount,x;do{sign=1;beg=0;end=dmsa.length;ind1=d.NONE;k=-1;if(end>beg&&(k=lookup(hemispheres_,dmsa.charAt(beg)))>=0){ind1=k&2?d.LONGITUDE:d.LATITUDE;sign=k&1?1:-1;++beg}if(end>beg&&(k=lookup(hemispheres_,dmsa.charAt(end-1)))>=0)if(k>=0){if(ind1!==d.NONE){if(dmsa.charAt(beg-1).toUpperCase()===dmsa.charAt(end-1).toUpperCase())errormsg="Repeated hemisphere indicators "+dmsa.charAt(beg-1)+" in "+dmsa.substr(beg-1,end-beg+1);else errormsg="Contradictory hemisphere indicators "+dmsa.charAt(beg-
1)+" and "+dmsa.charAt(end-1)+" in "+dmsa.substr(beg-1,end-beg+1);break}ind1=k&2?d.LONGITUDE:d.LATITUDE;sign=k&1?1:-1;--end}if(end>beg&&(k=lookup(signs_,dmsa.charAt(beg)))>=0)if(k>=0){sign*=k?1:-1;++beg}if(end===beg){errormsg="Empty or incomplete DMS string "+dmsa;break}ipieces=[0,0,0];fpieces=[0,0,0];npiece=0;icurrent=0;fcurrent=0;ncurrent=0;p=beg;pointseen=false;digcount=0;intcount=0;while(p<end){x=dmsa.charAt(p++);if((k=lookup(digits_,x))>=0){++ncurrent;if(digcount>0)++digcount;else{icurrent=10*
icurrent+k;++intcount}}else if(x==="."){if(pointseen){errormsg="Multiple decimal points in "+dmsa.substr(beg,end-beg);break}pointseen=true;digcount=1}else if((k=lookup(dmsindicators_,x))>=0){if(k>=3){if(p===end){errormsg="Illegal for colon to appear at the end of "+dmsa.substr(beg,end-beg);break}k=npiece}if(k===npiece-1){errormsg="Repeated "+components_[k]+" component in "+dmsa.substr(beg,end-beg);break}else if(k<npiece){errormsg=components_[k]+" component follows "+components_[npiece-1]+" component in "+
dmsa.substr(beg,end-beg);break}if(ncurrent===0){errormsg="Missing numbers in "+components_[k]+" component of "+dmsa.substr(beg,end-beg);break}if(digcount>0){fcurrent=parseFloat(dmsa.substr(p-intcount-digcount-1,intcount+digcount));icurrent=0}ipieces[k]=icurrent;fpieces[k]=icurrent+fcurrent;if(p<end){npiece=k+1;icurrent=fcurrent=0;ncurrent=digcount=intcount=0}}else if(lookup(signs_,x)>=0){errormsg="Internal sign in DMS string "+dmsa.substr(beg,end-beg);break}else{errormsg="Illegal character "+x+" in DMS string "+
dmsa.substr(beg,end-beg);break}}if(errormsg.length)break;if(lookup(dmsindicators_,dmsa.charAt(p-1))<0){if(npiece>=3){errormsg="Extra text following seconds in DMS string "+dmsa.substr(beg,end-beg);break}if(ncurrent===0){errormsg="Missing numbers in trailing component of "+dmsa.substr(beg,end-beg);break}if(digcount>0){fcurrent=parseFloat(dmsa.substr(p-intcount-digcount,intcount+digcount));icurrent=0}ipieces[npiece]=icurrent;fpieces[npiece]=icurrent+fcurrent}if(pointseen&&digcount===0){errormsg="Decimal point in non-terminal component of "+
dmsa.substr(beg,end-beg);break}if(ipieces[1]>=60||fpieces[1]>60){errormsg="Minutes "+fpieces[1]+" not in range [0,60)";break}if(ipieces[2]>=60||fpieces[2]>60){errormsg="Seconds "+fpieces[2]+" not in range [0,60)";break}vals.ind=ind1;vals.val=sign*(fpieces[2]?(60*(60*fpieces[0]+fpieces[1])+fpieces[2])/3600:fpieces[1]?(60*fpieces[0]+fpieces[1])/60:fpieces[0]);return vals}while(false);vals.val=NumMatch(dmsa);if(vals.val===0)throw new Error(errormsg);else vals.ind=d.NONE;return vals};NumMatch=function(s){var t,
sign,p0,p1;if(s.length<3)return 0;t=s.toUpperCase().replace(/0+$/,"");sign=t.charAt(0)==="-"?-1:1;p0=t.charAt(0)==="-"||t.charAt(0)==="+"?1:0;p1=t.length-1;if(p1+1<p0+3)return 0;t=t.substr(p0,p1+1-p0);if(t==="NAN"||t==="1.#QNAN"||t==="1.#SNAN"||t==="1.#IND"||t==="1.#R")return Number.NaN;else if(t==="INF"||t==="1.#INF")return sign*Number.POSITIVE_INFINITY;return 0};d.DecodeLatLon=function(stra,strb,longfirst){var vals={},valsa=d.Decode(stra),valsb=d.Decode(strb),a=valsa.val,ia=valsa.ind,b=valsb.val,
ib=valsb.ind,lat,lon;if(!longfirst)longfirst=false;if(ia===d.NONE&&ib===d.NONE){ia=longfirst?d.LONGITUDE:d.LATITUDE;ib=longfirst?d.LATITUDE:d.LONGITUDE}else if(ia===d.NONE)ia=d.LATITUDE+d.LONGITUDE-ib;else if(ib===d.NONE)ib=d.LATITUDE+d.LONGITUDE-ia;if(ia===ib)throw new Error("Both "+stra+" and "+strb+" interpreted as "+(ia===d.LATITUDE?"latitudes":"longitudes"));lat=ia===d.LATITUDE?a:b;lon=ia===d.LATITUDE?b:a;if(Math.abs(lat)>90)throw new Error("Latitude "+lat+" not in [-90,90]");vals.lat=lat;vals.lon=
lon;return vals};d.DecodeAngle=function(angstr){var vals=d.Decode(angstr),ang=vals.val,ind=vals.ind;if(ind!==d.NONE)throw new Error("Arc angle "+angstr+" includes a hemisphere N/E/W/S");return ang};d.DecodeAzimuth=function(azistr){var vals=d.Decode(azistr),azi=vals.val,ind=vals.ind;if(ind===d.LATITUDE)throw new Error("Azimuth "+azistr+" has a latitude hemisphere N/S");return azi};d.Encode=function(angle,trailing,prec,ind){var scale=1,i,sign,idegree,fdegree,f,pieces,ip,fp,s;if(!ind)ind=d.NONE;if(!isFinite(angle))return angle<
0?String("-inf"):angle>0?String("inf"):String("nan");prec=Math.min(15-2*trailing,prec);for(i=0;i<trailing;++i)scale*=60;for(i=0;i<prec;++i)scale*=10;if(ind===d.AZIMUTH)angle-=Math.floor(angle/360)*360;sign=angle<0?-1:1;angle*=sign;idegree=Math.floor(angle);fdegree=(angle-idegree)*scale+.5;f=Math.floor(fdegree);fdegree=f==fdegree&&f&1?f-1:f;fdegree/=scale;fdegree=Math.floor((angle-idegree)*scale+.5)/scale;if(fdegree>=1){idegree+=1;fdegree-=1}pieces=[fdegree,0,0];for(i=1;i<=trailing;++i){ip=Math.floor(pieces[i-
1]);fp=pieces[i-1]-ip;pieces[i]=fp*60;pieces[i-1]=ip}pieces[0]+=idegree;s="";if(ind===d.NONE&&sign<0)s+="-";switch(trailing){case d.DEGREE:s+=zerofill(pieces[0].toFixed(prec),ind===d.NONE?0:1+Math.min(ind,2)+prec+(prec?1:0))+dmsindicatorsu_.charAt(0);break;default:s+=zerofill(pieces[0].toFixed(0),ind===d.NONE?0:1+Math.min(ind,2))+dmsindicatorsu_.charAt(0);switch(trailing){case d.MINUTE:s+=zerofill(pieces[1].toFixed(prec),2+prec+(prec?1:0))+dmsindicatorsu_.charAt(1);break;case d.SECOND:s+=zerofill(pieces[1].toFixed(0),
2)+dmsindicatorsu_.charAt(1);s+=zerofill(pieces[2].toFixed(prec),2+prec+(prec?1:0))+dmsindicatorsu_.charAt(2);break;default:break}}if(ind!==d.NONE&&ind!==d.AZIMUTH)s+=hemispheres_.charAt((ind===d.LATITUDE?0:2)+(sign<0?0:1));return s}})(GeographicLib.DMS);GeographicLib.Geodesic={};GeographicLib.GeodesicLine={};GeographicLib.PolygonArea={};
(function(g,l,p,m,c){var GEOGRAPHICLIB_GEODESIC_ORDER=6,nA1_=GEOGRAPHICLIB_GEODESIC_ORDER,nA2_=GEOGRAPHICLIB_GEODESIC_ORDER,nA3_=GEOGRAPHICLIB_GEODESIC_ORDER,nA3x_=nA3_,nC3x_,nC4x_,maxit1_=20,maxit2_=maxit1_+m.digits+10,tol0_=m.epsilon,tol1_=200*tol0_,tol2_=Math.sqrt(tol0_),tolb_=tol0_*tol1_,xthresh_=1E3*tol2_,CAP_NONE=0,CAP_ALL=31,CAP_MASK=CAP_ALL,OUT_ALL=32640,Astroid,A1m1f_coeff,C1f_coeff,C1pf_coeff,A2m1f_coeff,C2f_coeff,A3_coeff,C3_coeff,C4_coeff;g.tiny_=Math.sqrt(Number.MIN_VALUE);g.nC1_=GEOGRAPHICLIB_GEODESIC_ORDER;
g.nC1p_=GEOGRAPHICLIB_GEODESIC_ORDER;g.nC2_=GEOGRAPHICLIB_GEODESIC_ORDER;g.nC3_=GEOGRAPHICLIB_GEODESIC_ORDER;g.nC4_=GEOGRAPHICLIB_GEODESIC_ORDER;nC3x_=g.nC3_*(g.nC3_-1)/2;nC4x_=g.nC4_*(g.nC4_+1)/2,g.CAP_C1=1<<0;g.CAP_C1p=1<<1;g.CAP_C2=1<<2;g.CAP_C3=1<<3;g.CAP_C4=1<<4;g.NONE=0;g.LATITUDE=1<<7|CAP_NONE;g.LONGITUDE=1<<8|g.CAP_C3;g.AZIMUTH=1<<9|CAP_NONE;g.DISTANCE=1<<10|g.CAP_C1;g.STANDARD=g.LATITUDE|g.LONGITUDE|g.AZIMUTH|g.DISTANCE;g.DISTANCE_IN=1<<11|g.CAP_C1|g.CAP_C1p;g.REDUCEDLENGTH=1<<12|g.CAP_C1|
g.CAP_C2;g.GEODESICSCALE=1<<13|g.CAP_C1|g.CAP_C2;g.AREA=1<<14|g.CAP_C4;g.ALL=OUT_ALL|CAP_ALL;g.LONG_UNROLL=1<<15;g.OUT_MASK=OUT_ALL|g.LONG_UNROLL;g.SinCosSeries=function(sinp,sinx,cosx,c){var k=c.length,n=k-(sinp?1:0),ar=2*(cosx-sinx)*(cosx+sinx),y0=n&1?c[--k]:0,y1=0;n=Math.floor(n/2);while(n--){y1=ar*y0-y1+c[--k];y0=ar*y1-y0+c[--k]}return sinp?2*sinx*cosx*y0:cosx*(y0-y1)};Astroid=function(x,y){var k,p=m.sq(x),q=m.sq(y),r=(p+q-1)/6,S,r2,r3,disc,u,T3,T,ang,v,uv,w;if(!(q===0&&r<=0)){S=p*q/4;r2=m.sq(r);
r3=r*r2;disc=S*(S+2*r3);u=r;if(disc>=0){T3=S+r3;T3+=T3<0?-Math.sqrt(disc):Math.sqrt(disc);T=m.cbrt(T3);u+=T+(T!==0?r2/T:0)}else{ang=Math.atan2(Math.sqrt(-disc),-(S+r3));u+=2*r*Math.cos(ang/3)}v=Math.sqrt(m.sq(u)+q);uv=u<0?q/(v-u):u+v;w=(uv-q)/(2*v);k=uv/(Math.sqrt(uv+m.sq(w))+w)}else k=0;return k};A1m1f_coeff=[+1,4,64,0,256];g.A1m1f=function(eps){var p=Math.floor(nA1_/2),t=m.polyval(p,A1m1f_coeff,0,m.sq(eps))/A1m1f_coeff[p+1];return(t+eps)/(1-eps)};C1f_coeff=[-1,6,-16,32,-9,64,-128,2048,+9,-16,768,
+3,-5,512,-7,1280,-7,2048];g.C1f=function(eps,c){var eps2=m.sq(eps),d=eps,o=0,l,p;for(l=1;l<=g.nC1_;++l){p=Math.floor((g.nC1_-l)/2);c[l]=d*m.polyval(p,C1f_coeff,o,eps2)/C1f_coeff[o+p+1];o+=p+2;d*=eps}};C1pf_coeff=[+205,-432,768,1536,+4005,-4736,3840,12288,-225,116,384,-7173,2695,7680,+3467,7680,+38081,61440];g.C1pf=function(eps,c){var eps2=m.sq(eps),d=eps,o=0,l,p;for(l=1;l<=g.nC1p_;++l){p=Math.floor((g.nC1p_-l)/2);c[l]=d*m.polyval(p,C1pf_coeff,o,eps2)/C1pf_coeff[o+p+1];o+=p+2;d*=eps}};A2m1f_coeff=
[-11,-28,-192,0,256];g.A2m1f=function(eps){var p=Math.floor(nA2_/2),t=m.polyval(p,A2m1f_coeff,0,m.sq(eps))/A2m1f_coeff[p+1];return(t-eps)/(1+eps)};C2f_coeff=[+1,2,16,32,+35,64,384,2048,+15,80,768,+7,35,512,+63,1280,+77,2048];g.C2f=function(eps,c){var eps2=m.sq(eps),d=eps,o=0,l,p;for(l=1;l<=g.nC2_;++l){p=Math.floor((g.nC2_-l)/2);c[l]=d*m.polyval(p,C2f_coeff,o,eps2)/C2f_coeff[o+p+1];o+=p+2;d*=eps}};g.Geodesic=function(a,f){this.a=a;this.f=f;this._f1=1-this.f;this._e2=this.f*(2-this.f);this._ep2=this._e2/
m.sq(this._f1);this._n=this.f/(2-this.f);this._b=this.a*this._f1;this._c2=(m.sq(this.a)+m.sq(this._b)*(this._e2===0?1:(this._e2>0?m.atanh(Math.sqrt(this._e2)):Math.atan(Math.sqrt(-this._e2)))/Math.sqrt(Math.abs(this._e2))))/2;this._etol2=.1*tol2_/Math.sqrt(Math.max(.001,Math.abs(this.f))*Math.min(1,1-this.f/2)/2);if(!(isFinite(this.a)&&this.a>0))throw new Error("Major radius is not positive");if(!(isFinite(this._b)&&this._b>0))throw new Error("Minor radius is not positive");this._A3x=new Array(nA3x_);
this._C3x=new Array(nC3x_);this._C4x=new Array(nC4x_);this.A3coeff();this.C3coeff();this.C4coeff()};A3_coeff=[-3,128,-2,-3,64,-1,-3,-1,16,+3,-1,-2,8,+1,-1,2,+1,1];g.Geodesic.prototype.A3coeff=function(){var o=0,k=0,j,p;for(j=nA3_-1;j>=0;--j){p=Math.min(nA3_-j-1,j);this._A3x[k++]=m.polyval(p,A3_coeff,o,this._n)/A3_coeff[o+p+1];o+=p+2}};C3_coeff=[+3,128,+2,5,128,-1,3,3,64,-1,0,1,8,-1,1,4,+5,256,+1,3,128,-3,-2,3,64,+1,-3,2,32,+7,512,-10,9,384,+5,-9,5,192,+7,512,-14,7,512,+21,2560];g.Geodesic.prototype.C3coeff=
function(){var o=0,k=0,l,j,p;for(l=1;l<g.nC3_;++l)for(j=g.nC3_-1;j>=l;--j){p=Math.min(g.nC3_-j-1,j);this._C3x[k++]=m.polyval(p,C3_coeff,o,this._n)/C3_coeff[o+p+1];o+=p+2}};C4_coeff=[+97,15015,+1088,156,45045,-224,-4784,1573,45045,-10656,14144,-4576,-858,45045,+64,624,-4576,6864,-3003,15015,+100,208,572,3432,-12012,30030,45045,+1,9009,-2944,468,135135,+5792,1040,-1287,135135,+5952,-11648,9152,-2574,135135,-64,-624,4576,-6864,3003,135135,+8,10725,+1856,-936,225225,-8448,4992,-1144,225225,-1440,4160,
-4576,1716,225225,-136,63063,+1024,-208,105105,+3584,-3328,1144,315315,-128,135135,-2560,832,405405,+128,99099];g.Geodesic.prototype.C4coeff=function(){var o=0,k=0,l,j,p;for(l=0;l<g.nC4_;++l)for(j=g.nC4_-1;j>=l;--j){p=g.nC4_-j-1;this._C4x[k++]=m.polyval(p,C4_coeff,o,this._n)/C4_coeff[o+p+1];o+=p+2}};g.Geodesic.prototype.A3f=function(eps){return m.polyval(nA3x_-1,this._A3x,0,eps)};g.Geodesic.prototype.C3f=function(eps,c){var mult=1,o=0,l,p;for(l=1;l<g.nC3_;++l){p=g.nC3_-l-1;mult*=eps;c[l]=mult*m.polyval(p,
this._C3x,o,eps);o+=p+1}};g.Geodesic.prototype.C4f=function(eps,c){var mult=1,o=0,l,p;for(l=0;l<g.nC4_;++l){p=g.nC4_-l-1;c[l]=mult*m.polyval(p,this._C4x,o,eps);o+=p+1;mult*=eps}};g.Geodesic.prototype.Lengths=function(eps,sig12,ssig1,csig1,dn1,ssig2,csig2,dn2,cbet1,cbet2,outmask,C1a,C2a){outmask&=g.OUT_MASK;var vals={},m0x=0,J12=0,A1=0,A2=0,B1,B2,l,csig12,t;if(outmask&(g.DISTANCE|g.REDUCEDLENGTH|g.GEODESICSCALE)){A1=g.A1m1f(eps);g.C1f(eps,C1a);if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){A2=g.A2m1f(eps);
g.C2f(eps,C2a);m0x=A1-A2;A2=1+A2}A1=1+A1}if(outmask&g.DISTANCE){B1=g.SinCosSeries(true,ssig2,csig2,C1a)-g.SinCosSeries(true,ssig1,csig1,C1a);vals.s12b=A1*(sig12+B1);if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){B2=g.SinCosSeries(true,ssig2,csig2,C2a)-g.SinCosSeries(true,ssig1,csig1,C2a);J12=m0x*sig12+(A1*B1-A2*B2)}}else if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){for(l=1;l<=g.nC2_;++l)C2a[l]=A1*C1a[l]-A2*C2a[l];J12=m0x*sig12+(g.SinCosSeries(true,ssig2,csig2,C2a)-g.SinCosSeries(true,ssig1,csig1,
C2a))}if(outmask&g.REDUCEDLENGTH){vals.m0=m0x;vals.m12b=dn2*(csig1*ssig2)-dn1*(ssig1*csig2)-csig1*csig2*J12}if(outmask&g.GEODESICSCALE){csig12=csig1*csig2+ssig1*ssig2;t=this._ep2*(cbet1-cbet2)*(cbet1+cbet2)/(dn1+dn2);vals.M12=csig12+(t*ssig2-csig2*J12)*ssig1/dn1;vals.M21=csig12-(t*ssig1-csig1*J12)*ssig2/dn2}return vals};g.Geodesic.prototype.InverseStart=function(sbet1,cbet1,dn1,sbet2,cbet2,dn2,lam12,C1a,C2a){var vals={},sbet12=sbet2*cbet1-cbet2*sbet1,cbet12=cbet2*cbet1+sbet2*sbet1,sbet12a,shortline,
omg12,sbetm2,somg12,comg12,t,ssig12,csig12,x,y,lamscale,betscale,k2,eps,cbet12a,bet12a,m12b,m0,nvals,k,omg12a;vals.sig12=-1;sbet12a=sbet2*cbet1;sbet12a+=cbet2*sbet1;shortline=cbet12>=0&&sbet12<.5&&cbet2*lam12<.5;omg12=lam12;if(shortline){sbetm2=m.sq(sbet1+sbet2);sbetm2/=sbetm2+m.sq(cbet1+cbet2);vals.dnm=Math.sqrt(1+this._ep2*sbetm2);omg12/=this._f1*vals.dnm}somg12=Math.sin(omg12);comg12=Math.cos(omg12);vals.salp1=cbet2*somg12;vals.calp1=comg12>=0?sbet12+cbet2*sbet1*m.sq(somg12)/(1+comg12):sbet12a-
cbet2*sbet1*m.sq(somg12)/(1-comg12);ssig12=m.hypot(vals.salp1,vals.calp1);csig12=sbet1*sbet2+cbet1*cbet2*comg12;if(shortline&&ssig12<this._etol2){vals.salp2=cbet1*somg12;vals.calp2=sbet12-cbet1*sbet2*(comg12>=0?m.sq(somg12)/(1+comg12):1-comg12);t=m.hypot(vals.salp2,vals.calp2);vals.salp2/=t;vals.calp2/=t;vals.sig12=Math.atan2(ssig12,csig12)}else if(Math.abs(this._n)>.1||csig12>=0||ssig12>=6*Math.abs(this._n)*Math.PI*m.sq(cbet1));else{if(this.f>=0){k2=m.sq(sbet1)*this._ep2;eps=k2/(2*(1+Math.sqrt(1+
k2))+k2);lamscale=this.f*cbet1*this.A3f(eps)*Math.PI;betscale=lamscale*cbet1;x=(lam12-Math.PI)/lamscale;y=sbet12a/betscale}else{cbet12a=cbet2*cbet1-sbet2*sbet1;bet12a=Math.atan2(sbet12a,cbet12a);nvals=this.Lengths(this._n,Math.PI+bet12a,sbet1,-cbet1,dn1,sbet2,cbet2,dn2,cbet1,cbet2,g.REDUCEDLENGTH,C1a,C2a);m12b=nvals.m12b;m0=nvals.m0;x=-1+m12b/(cbet1*cbet2*m0*Math.PI);betscale=x<-.01?sbet12a/x:-this.f*m.sq(cbet1)*Math.PI;lamscale=betscale/cbet1;y=(lam12-Math.PI)/lamscale}if(y>-tol1_&&x>-1-xthresh_)if(this.f>=
0){vals.salp1=Math.min(1,-x);vals.calp1=-Math.sqrt(1-m.sq(vals.salp1))}else{vals.calp1=Math.max(x>-tol1_?0:-1,x);vals.salp1=Math.sqrt(1-m.sq(vals.calp1))}else{k=Astroid(x,y);omg12a=lamscale*(this.f>=0?-x*k/(1+k):-y*(1+k)/k);somg12=Math.sin(omg12a);comg12=-Math.cos(omg12a);vals.salp1=cbet2*somg12;vals.calp1=sbet12a-cbet2*sbet1*m.sq(somg12)/(1-comg12)}}if(!(vals.salp1<=0)){t=m.hypot(vals.salp1,vals.calp1);vals.salp1/=t;vals.calp1/=t}else{vals.salp1=1;vals.calp1=0}return vals};g.Geodesic.prototype.Lambda12=
function(sbet1,cbet1,dn1,sbet2,cbet2,dn2,salp1,calp1,diffp,C1a,C2a,C3a){var vals={},t,salp0,calp0,somg1,comg1,somg2,comg2,omg12,B312,h0,k2,nvals;if(sbet1===0&&calp1===0)calp1=-g.tiny_;salp0=salp1*cbet1;calp0=m.hypot(calp1,salp1*sbet1);vals.ssig1=sbet1;somg1=salp0*sbet1;vals.csig1=comg1=calp1*cbet1;t=m.hypot(vals.ssig1,vals.csig1);vals.ssig1/=t;vals.csig1/=t;vals.salp2=cbet2!==cbet1?salp0/cbet2:salp1;vals.calp2=cbet2!==cbet1||Math.abs(sbet2)!==-sbet1?Math.sqrt(m.sq(calp1*cbet1)+(cbet1<-sbet1?(cbet2-
cbet1)*(cbet1+cbet2):(sbet1-sbet2)*(sbet1+sbet2)))/cbet2:Math.abs(calp1);vals.ssig2=sbet2;somg2=salp0*sbet2;vals.csig2=comg2=vals.calp2*cbet2;t=m.hypot(vals.ssig2,vals.csig2);vals.ssig2/=t;vals.csig2/=t;vals.sig12=Math.atan2(Math.max(0,vals.csig1*vals.ssig2-vals.ssig1*vals.csig2),vals.csig1*vals.csig2+vals.ssig1*vals.ssig2);omg12=Math.atan2(Math.max(0,comg1*somg2-somg1*comg2),comg1*comg2+somg1*somg2);k2=m.sq(calp0)*this._ep2;vals.eps=k2/(2*(1+Math.sqrt(1+k2))+k2);this.C3f(vals.eps,C3a);B312=g.SinCosSeries(true,
vals.ssig2,vals.csig2,C3a)-g.SinCosSeries(true,vals.ssig1,vals.csig1,C3a);h0=-this.f*this.A3f(vals.eps);vals.domg12=salp0*h0*(vals.sig12+B312);vals.lam12=omg12+vals.domg12;if(diffp)if(vals.calp2===0)vals.dlam12=-2*this._f1*dn1/sbet1;else{nvals=this.Lengths(vals.eps,vals.sig12,vals.ssig1,vals.csig1,dn1,vals.ssig2,vals.csig2,dn2,cbet1,cbet2,g.REDUCEDLENGTH,C1a,C2a);vals.dlam12=nvals.m12b;vals.dlam12*=this._f1/(vals.calp2*cbet2)}return vals};g.Geodesic.prototype.Inverse=function(lat1,lon1,lat2,lon2,
outmask){var vals={},lon12,lonsign,t,swapp,latsign,sbet1,cbet1,sbet2,cbet2,s12x,m12x,dn1,dn2,lam12,slam12,clam12,sig12,calp1,salp1,calp2,salp2,C1a,C2a,C3a,meridian,nvals,ssig1,csig1,ssig2,csig2,eps,omg12,dnm,numit,salp1a,calp1a,salp1b,calp1b,tripn,tripb,v,dv,dalp1,sdalp1,cdalp1,nsalp1,lengthmask,salp0,calp0,alp12,k2,A4,C4a,B41,B42,somg12,domg12,dbet1,dbet2,salp12,calp12;if(!outmask)outmask=g.STANDARD;if(outmask==g.LONG_UNROLL)outmask|=g.STANDARD;outmask&=g.OUT_MASK;vals.lat1=lat1=m.LatFix(lat1);vals.lat2=
lat2=m.LatFix(lat2);lon12=m.AngDiff(lon1,lon2);if(outmask&g.LONG_UNROLL){vals.lon1=lon1;vals.lon2=lon1+lon12}else{vals.lon1=m.AngNormalize(lon1);vals.lon2=m.AngNormalize(lon2)}lon12=m.AngRound(lon12);lonsign=lon12>=0?1:-1;lon12*=lonsign;lat1=m.AngRound(lat1);lat2=m.AngRound(lat2);swapp=Math.abs(lat1)<Math.abs(lat2)?-1:1;if(swapp<0){lonsign*=-1;t=lat1;lat1=lat2;lat2=t}latsign=lat1<0?1:-1;lat1*=latsign;lat2*=latsign;t=m.sincosd(lat1);sbet1=this._f1*t.s;cbet1=t.c;t=m.hypot(sbet1,cbet1);sbet1/=t;cbet1/=
t;cbet1=Math.max(g.tiny_,cbet1);t=m.sincosd(lat2);sbet2=this._f1*t.s;cbet2=t.c;t=m.hypot(sbet2,cbet2);sbet2/=t;cbet2/=t;cbet2=Math.max(g.tiny_,cbet2);if(cbet1<-sbet1){if(cbet2===cbet1)sbet2=sbet2<0?sbet1:-sbet1}else if(Math.abs(sbet2)===-sbet1)cbet2=cbet1;dn1=Math.sqrt(1+this._ep2*m.sq(sbet1));dn2=Math.sqrt(1+this._ep2*m.sq(sbet2));lam12=lon12*m.degree;t=m.sincosd(lon12);slam12=t.s;clam12=t.c;C1a=new Array(g.nC1_+1);C2a=new Array(g.nC2_+1);C3a=new Array(g.nC3_);meridian=lat1===-90||slam12===0;if(meridian){calp1=
clam12;salp1=slam12;calp2=1;salp2=0;ssig1=sbet1;csig1=calp1*cbet1;ssig2=sbet2;csig2=calp2*cbet2;sig12=Math.atan2(Math.max(0,csig1*ssig2-ssig1*csig2),csig1*csig2+ssig1*ssig2);nvals=this.Lengths(this._n,sig12,ssig1,csig1,dn1,ssig2,csig2,dn2,cbet1,cbet2,outmask|g.DISTANCE|g.REDUCEDLENGTH,C1a,C2a);s12x=nvals.s12b;m12x=nvals.m12b;if((outmask&g.GEODESICSCALE)!==0){vals.M12=nvals.M12;vals.M21=nvals.M21}if(sig12<1||m12x>=0){if(sig12<3*g.tiny_)sig12=m12x=s12x=0;m12x*=this._b;s12x*=this._b;vals.a12=sig12/m.degree}else meridian=
false}if(!meridian&&sbet1===0&&(this.f<=0||lam12<=Math.PI-this.f*Math.PI)){calp1=calp2=0;salp1=salp2=1;s12x=this.a*lam12;sig12=omg12=lam12/this._f1;m12x=this._b*Math.sin(sig12);if(outmask&g.GEODESICSCALE)vals.M12=vals.M21=Math.cos(sig12);vals.a12=lon12/this._f1}else if(!meridian){nvals=this.InverseStart(sbet1,cbet1,dn1,sbet2,cbet2,dn2,lam12,C1a,C2a);sig12=nvals.sig12;salp1=nvals.salp1;calp1=nvals.calp1;if(sig12>=0){salp2=nvals.salp2;calp2=nvals.calp2;dnm=nvals.dnm;s12x=sig12*this._b*dnm;m12x=m.sq(dnm)*
this._b*Math.sin(sig12/dnm);if(outmask&g.GEODESICSCALE)vals.M12=vals.M21=Math.cos(sig12/dnm);vals.a12=sig12/m.degree;omg12=lam12/(this._f1*dnm)}else{numit=0;salp1a=g.tiny_;calp1a=1;salp1b=g.tiny_;calp1b=-1;for(tripn=false,tripb=false;numit<maxit2_;++numit){nvals=this.Lambda12(sbet1,cbet1,dn1,sbet2,cbet2,dn2,salp1,calp1,numit<maxit1_,C1a,C2a,C3a);v=nvals.lam12-lam12;salp2=nvals.salp2;calp2=nvals.calp2;sig12=nvals.sig12;ssig1=nvals.ssig1;csig1=nvals.csig1;ssig2=nvals.ssig2;csig2=nvals.csig2;eps=nvals.eps;
omg12=nvals.domg12;dv=nvals.dlam12;if(tripb||!(Math.abs(v)>=(tripn?8:2)*tol0_))break;if(v>0&&(numit<maxit1_||calp1/salp1>calp1b/salp1b)){salp1b=salp1;calp1b=calp1}else if(v<0&&(numit<maxit1_||calp1/salp1<calp1a/salp1a)){salp1a=salp1;calp1a=calp1}if(numit<maxit1_&&dv>0){dalp1=-v/dv;sdalp1=Math.sin(dalp1);cdalp1=Math.cos(dalp1);nsalp1=salp1*cdalp1+calp1*sdalp1;if(nsalp1>0&&Math.abs(dalp1)<Math.PI){calp1=calp1*cdalp1-salp1*sdalp1;salp1=nsalp1;t=m.hypot(salp1,calp1);salp1/=t;calp1/=t;tripn=Math.abs(v)<=
16*tol0_;continue}}salp1=(salp1a+salp1b)/2;calp1=(calp1a+calp1b)/2;t=m.hypot(salp1,calp1);salp1/=t;calp1/=t;tripn=false;tripb=Math.abs(salp1a-salp1)+(calp1a-calp1)<tolb_||Math.abs(salp1-salp1b)+(calp1-calp1b)<tolb_}lengthmask=outmask|(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)?g.DISTANCE:g.NONE);nvals=this.Lengths(eps,sig12,ssig1,csig1,dn1,ssig2,csig2,dn2,cbet1,cbet2,lengthmask,C1a,C2a);s12x=nvals.s12b;m12x=nvals.m12b;if((outmask&g.GEODESICSCALE)!==0){vals.M12=nvals.M12;vals.M21=nvals.M21}m12x*=this._b;
s12x*=this._b;vals.a12=sig12/m.degree;omg12=lam12-omg12}}if(outmask&g.DISTANCE)vals.s12=0+s12x;if(outmask&g.REDUCEDLENGTH)vals.m12=0+m12x;if(outmask&g.AREA){salp0=salp1*cbet1;calp0=m.hypot(calp1,salp1*sbet1);if(calp0!==0&&salp0!==0){ssig1=sbet1;csig1=calp1*cbet1;ssig2=sbet2;csig2=calp2*cbet2;k2=m.sq(calp0)*this._ep2;eps=k2/(2*(1+Math.sqrt(1+k2))+k2);A4=m.sq(this.a)*calp0*salp0*this._e2;t=m.hypot(ssig1,csig1);ssig1/=t;csig1/=t;t=m.hypot(ssig2,csig2);ssig2/=t;csig2/=t;C4a=new Array(g.nC4_);this.C4f(eps,
C4a);B41=g.SinCosSeries(false,ssig1,csig1,C4a);B42=g.SinCosSeries(false,ssig2,csig2,C4a);vals.S12=A4*(B42-B41)}else vals.S12=0;if(!meridian&&omg12<.75*Math.PI&&sbet2-sbet1<1.75){somg12=Math.sin(omg12);domg12=1+Math.cos(omg12);dbet1=1+cbet1;dbet2=1+cbet2;alp12=2*Math.atan2(somg12*(sbet1*dbet2+sbet2*dbet1),domg12*(sbet1*sbet2+dbet1*dbet2))}else{salp12=salp2*calp1-calp2*salp1;calp12=calp2*calp1+salp2*salp1;if(salp12===0&&calp12<0){salp12=g.tiny_*calp1;calp12=-1}alp12=Math.atan2(salp12,calp12)}vals.S12+=
this._c2*alp12;vals.S12*=swapp*lonsign*latsign;vals.S12+=0}if(swapp<0){t=salp1;salp1=salp2;salp2=t;t=calp1;calp1=calp2;calp2=t;if(outmask&g.GEODESICSCALE){t=vals.M12;vals.M12=vals.M21;vals.M21=t}}salp1*=swapp*lonsign;calp1*=swapp*latsign;salp2*=swapp*lonsign;calp2*=swapp*latsign;if(outmask&g.AZIMUTH){vals.azi1=m.atan2d(salp1,calp1);vals.azi2=m.atan2d(salp2,calp2)}return vals};g.Geodesic.prototype.GenDirect=function(lat1,lon1,azi1,arcmode,s12_a12,outmask){var line;if(!outmask)outmask=g.STANDARD;else if(outmask==
g.LONG_UNROLL)outmask|=g.STANDARD;line=new l.GeodesicLine(this,lat1,lon1,azi1,outmask|(arcmode?g.NONE:g.DISTANCE_IN));return line.GenPosition(arcmode,s12_a12,outmask)};g.Geodesic.prototype.Direct=function(lat1,lon1,azi1,s12,outmask){return this.GenDirect(lat1,lon1,azi1,false,s12,outmask)};g.Geodesic.prototype.ArcDirect=function(lat1,lon1,azi1,a12,outmask){return this.GenDirect(lat1,lon1,azi1,true,a12,outmask)};g.Geodesic.prototype.Line=function(lat1,lon1,azi1,caps){return new l.GeodesicLine(this,
lat1,lon1,azi1,caps)};g.Geodesic.prototype.Polygon=function(polyline){return new p.PolygonArea(this,polyline)};g.WGS84=new g.Geodesic(c.WGS84.a,c.WGS84.f)})(GeographicLib.Geodesic,GeographicLib.GeodesicLine,GeographicLib.PolygonArea,GeographicLib.Math,GeographicLib.Constants);
(function(g,l,m){l.GeodesicLine=function(geod,lat1,lon1,azi1,caps){var t,cbet1,sbet1,eps,s,c;if(!caps)caps=g.STANDARD|g.DISTANCE_IN;this.a=geod.a;this.f=geod.f;this._b=geod._b;this._c2=geod._c2;this._f1=geod._f1;this._caps=(!caps?g.ALL:caps|g.LATITUDE|g.AZIMUTH)|g.LONG_UNROLL;this.lat1=m.LatFix(lat1);this.lon1=lon1;this.azi1=m.AngNormalize(azi1);t=m.sincosd(m.AngRound(this.azi1));this._salp1=t.s;this._calp1=t.c;t=m.sincosd(m.AngRound(this.lat1));sbet1=this._f1*t.s;cbet1=t.c;t=m.hypot(sbet1,cbet1);
sbet1/=t;cbet1/=t;cbet1=Math.max(g.tiny_,cbet1);this._dn1=Math.sqrt(1+geod._ep2*m.sq(sbet1));this._salp0=this._salp1*cbet1;this._calp0=m.hypot(this._calp1,this._salp1*sbet1);this._ssig1=sbet1;this._somg1=this._salp0*sbet1;this._csig1=this._comg1=sbet1!==0||this._calp1!==0?cbet1*this._calp1:1;t=m.hypot(this._ssig1,this._csig1);this._ssig1/=t;this._csig1/=t;this._k2=m.sq(this._calp0)*geod._ep2;eps=this._k2/(2*(1+Math.sqrt(1+this._k2))+this._k2);if(this._caps&g.CAP_C1){this._A1m1=g.A1m1f(eps);this._C1a=
new Array(g.nC1_+1);g.C1f(eps,this._C1a);this._B11=g.SinCosSeries(true,this._ssig1,this._csig1,this._C1a);s=Math.sin(this._B11);c=Math.cos(this._B11);this._stau1=this._ssig1*c+this._csig1*s;this._ctau1=this._csig1*c-this._ssig1*s}if(this._caps&g.CAP_C1p){this._C1pa=new Array(g.nC1p_+1);g.C1pf(eps,this._C1pa)}if(this._caps&g.CAP_C2){this._A2m1=g.A2m1f(eps);this._C2a=new Array(g.nC2_+1);g.C2f(eps,this._C2a);this._B21=g.SinCosSeries(true,this._ssig1,this._csig1,this._C2a)}if(this._caps&g.CAP_C3){this._C3a=
new Array(g.nC3_);geod.C3f(eps,this._C3a);this._A3c=-this.f*this._salp0*geod.A3f(eps);this._B31=g.SinCosSeries(true,this._ssig1,this._csig1,this._C3a)}if(this._caps&g.CAP_C4){this._C4a=new Array(g.nC4_);geod.C4f(eps,this._C4a);this._A4=m.sq(this.a)*this._calp0*this._salp0*geod._e2;this._B41=g.SinCosSeries(false,this._ssig1,this._csig1,this._C4a)}};l.GeodesicLine.prototype.GenPosition=function(arcmode,s12_a12,outmask){var vals={},sig12,ssig12,csig12,B12,AB1,ssig2,csig2,tau12,s,c,serr,omg12,lam12,lon12,
E,sbet2,cbet2,somg2,comg2,salp2,calp2,dn2,B22,AB2,J12,t,B42,salp12,calp12;if(!outmask)outmask=g.STANDARD;else if(outmask==g.LONG_UNROLL)outmask|=g.STANDARD;outmask&=this._caps&g.OUT_MASK;vals.lat1=this.lat1;vals.azi1=this.azi1;vals.lon1=outmask&g.LONG_UNROLL?this.lon1:m.AngNormalize(this.lon1);if(arcmode)vals.a12=s12_a12;else vals.s12=s12_a12;if(!(arcmode||this._caps&g.DISTANCE_IN&g.OUT_MASK)){vals.a12=Number.NaN;return vals}B12=0;AB1=0;if(arcmode){sig12=s12_a12*m.degree;t=m.sincosd(s12_a12);ssig12=
t.s;csig12=t.c}else{tau12=s12_a12/(this._b*(1+this._A1m1));s=Math.sin(tau12);c=Math.cos(tau12);B12=-g.SinCosSeries(true,this._stau1*c+this._ctau1*s,this._ctau1*c-this._stau1*s,this._C1pa);sig12=tau12-(B12-this._B11);ssig12=Math.sin(sig12);csig12=Math.cos(sig12);if(Math.abs(this.f)>.01){ssig2=this._ssig1*csig12+this._csig1*ssig12;csig2=this._csig1*csig12-this._ssig1*ssig12;B12=g.SinCosSeries(true,ssig2,csig2,this._C1a);serr=(1+this._A1m1)*(sig12+(B12-this._B11))-s12_a12/this._b;sig12=sig12-serr/Math.sqrt(1+
this._k2*m.sq(ssig2));ssig12=Math.sin(sig12);csig12=Math.cos(sig12)}}ssig2=this._ssig1*csig12+this._csig1*ssig12;csig2=this._csig1*csig12-this._ssig1*ssig12;dn2=Math.sqrt(1+this._k2*m.sq(ssig2));if(outmask&(g.DISTANCE|g.REDUCEDLENGTH|g.GEODESICSCALE)){if(arcmode||Math.abs(this.f)>.01)B12=g.SinCosSeries(true,ssig2,csig2,this._C1a);AB1=(1+this._A1m1)*(B12-this._B11)}sbet2=this._calp0*ssig2;cbet2=m.hypot(this._salp0,this._calp0*csig2);if(cbet2===0)cbet2=csig2=g.tiny_;salp2=this._salp0;calp2=this._calp0*
csig2;if(arcmode&&outmask&g.DISTANCE)vals.s12=this._b*((1+this._A1m1)*sig12+AB1);if(outmask&g.LONGITUDE){somg2=this._salp0*ssig2;comg2=csig2;E=this._salp0<0?-1:1;omg12=outmask&g.LONG_UNROLL?E*(sig12-(Math.atan2(ssig2,csig2)-Math.atan2(this._ssig1,this._csig1))+(Math.atan2(E*somg2,comg2)-Math.atan2(E*this._somg1,this._comg1))):Math.atan2(somg2*this._comg1-comg2*this._somg1,comg2*this._comg1+somg2*this._somg1);lam12=omg12+this._A3c*(sig12+(g.SinCosSeries(true,ssig2,csig2,this._C3a)-this._B31));lon12=
lam12/m.degree;vals.lon2=outmask&g.LONG_UNROLL?this.lon1+lon12:m.AngNormalize(m.AngNormalize(this.lon1)+m.AngNormalize(lon12))}if(outmask&g.LATITUDE)vals.lat2=m.atan2d(sbet2,this._f1*cbet2);if(outmask&g.AZIMUTH)vals.azi2=m.atan2d(salp2,calp2);if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){B22=g.SinCosSeries(true,ssig2,csig2,this._C2a);AB2=(1+this._A2m1)*(B22-this._B21);J12=(this._A1m1-this._A2m1)*sig12+(AB1-AB2);if(outmask&g.REDUCEDLENGTH)vals.m12=this._b*(dn2*(this._csig1*ssig2)-this._dn1*(this._ssig1*
csig2)-this._csig1*csig2*J12);if(outmask&g.GEODESICSCALE){t=this._k2*(ssig2-this._ssig1)*(ssig2+this._ssig1)/(this._dn1+dn2);vals.M12=csig12+(t*ssig2-csig2*J12)*this._ssig1/this._dn1;vals.M21=csig12-(t*this._ssig1-this._csig1*J12)*ssig2/dn2}}if(outmask&g.AREA){B42=g.SinCosSeries(false,ssig2,csig2,this._C4a);if(this._calp0===0||this._salp0===0){salp12=salp2*this._calp1-calp2*this._salp1;calp12=calp2*this._calp1+salp2*this._salp1;if(salp12===0&&calp12<0){salp12=g.tiny_*this._calp1;calp12=-1}}else{salp12=
this._calp0*this._salp0*(csig12<=0?this._csig1*(1-csig12)+ssig12*this._ssig1:ssig12*(this._csig1*ssig12/(1+csig12)+this._ssig1));calp12=m.sq(this._salp0)+m.sq(this._calp0)*this._csig1*csig2}vals.S12=this._c2*Math.atan2(salp12,calp12)+this._A4*(B42-this._B41)}if(!arcmode)vals.a12=sig12/m.degree;return vals};l.GeodesicLine.prototype.Position=function(s12,outmask){return this.GenPosition(false,s12,outmask)};l.GeodesicLine.prototype.ArcPosition=function(a12,outmask){return this.GenPosition(true,a12,outmask)}})(GeographicLib.Geodesic,
GeographicLib.GeodesicLine,GeographicLib.Math);
(function(p,g,m,a){var transit,transitdirect;transit=function(lon1,lon2){var lon12,cross;lon1=m.AngNormalize(lon1);lon2=m.AngNormalize(lon2);lon12=m.AngDiff(lon1,lon2);cross=lon1<0&&lon2>=0&&lon12>0?1:lon2<0&&lon1>=0&&lon12<0?-1:0;return cross};transitdirect=function(lon1,lon2){lon1=lon1%720;lon2=lon2%720;return(lon2>=0&&lon2<360||lon2<-360?0:1)-(lon1>=0&&lon1<360||lon1<-360?0:1)};p.PolygonArea=function(geod,polyline){this._geod=geod;this.a=this._geod.a;this.f=this._geod.f;this._area0=4*Math.PI*geod._c2;
this.polyline=!polyline?false:polyline;this._mask=g.LATITUDE|g.LONGITUDE|g.DISTANCE|(this.polyline?g.NONE:g.AREA|g.LONG_UNROLL);if(!this.polyline)this._areasum=new a.Accumulator(0);this._perimetersum=new a.Accumulator(0);this.Clear()};p.PolygonArea.prototype.Clear=function(){this.num=0;this._crossings=0;if(!this.polyline)this._areasum.Set(0);this._perimetersum.Set(0);this._lat0=this._lon0=this.lat=this.lon=Number.NaN};p.PolygonArea.prototype.AddPoint=function(lat,lon){var t;if(this.num===0){this._lat0=
this.lat=lat;this._lon0=this.lon=lon}else{t=this._geod.Inverse(this.lat,this.lon,lat,lon,this._mask);this._perimetersum.Add(t.s12);if(!this.polyline){this._areasum.Add(t.S12);this._crossings+=transit(this.lon,lon)}this.lat=lat;this.lon=lon}++this.num};p.PolygonArea.prototype.AddEdge=function(azi,s){var t;if(this.num){t=this._geod.Direct(this.lat,this.lon,azi,s,this._mask);this._perimetersum.Add(s);if(!this.polyline){this._areasum.Add(t.S12);this._crossings+=transitdirect(this.lon,t.lon2)}this.lat=
t.lat2;this.lon=t.lon2}++this.num};p.PolygonArea.prototype.Compute=function(reverse,sign){var vals={number:this.num},t,tempsum,crossings;if(this.num<2){vals.perimeter=0;if(!this.polyline)vals.area=0;return vals}if(this.polyline){vals.perimeter=this._perimetersum.Sum();return vals}t=this._geod.Inverse(this.lat,this.lon,this._lat0,this._lon0,this._mask);vals.perimeter=this._perimetersum.Sum(t.s12);tempsum=new a.Accumulator(this._areasum);tempsum.Add(t.S12);crossings=this._crossings+transit(this.lon,
this._lon0);if(crossings&1)tempsum.Add((tempsum.Sum()<0?1:-1)*this._area0/2);if(!reverse)tempsum.Negate();if(sign)if(tempsum.Sum()>this._area0/2)tempsum.Add(-this._area0);else{if(tempsum.Sum()<=-this._area0/2)tempsum.Add(+this._area0)}else if(tempsum.Sum()>=this._area0)tempsum.Add(-this._area0);else if(tempsum<0)tempsum.Add(-this._area0);vals.area=tempsum.Sum();return vals};p.PolygonArea.prototype.TestPoint=function(lat,lon,reverse,sign){var vals={number:this.num+1},t,tempsum,crossings,i;if(this.num===
0){vals.perimeter=0;if(!this.polyline)vals.area=0;return vals}vals.perimeter=this._perimetersum.Sum();tempsum=this.polyline?0:this._areasum.Sum();crossings=this._crossings;for(i=0;i<(this.polyline?1:2);++i){t=this._geod.Inverse(i===0?this.lat:lat,i===0?this.lon:lon,i!==0?this._lat0:lat,i!==0?this._lon0:lon,this._mask);vals.perimeter+=t.s12;if(!this.polyline){tempsum+=t.S12;crossings+=transit(i===0?this.lon:lon,i!==0?this._lon0:lon)}}if(this.polyline)return vals;if(crossings&1)tempsum+=(tempsum<0?
1:-1)*this._area0/2;if(!reverse)tempsum*=-1;if(sign)if(tempsum>this._area0/2)tempsum-=this._area0;else{if(tempsum<=-this._area0/2)tempsum+=this._area0}else if(tempsum>=this._area0)tempsum-=this._area0;else if(tempsum<0)tempsum+=this._area0;vals.area=tempsum;return vals};p.PolygonArea.prototype.TestEdge=function(azi,s,reverse,sign){var vals={number:this.num?this.num+1:0},t,tempsump,crossings;if(this.num===0)return vals;vals.perimeter=this._perimetersum.Sum()+s;if(this.polyline)return vals;tempsum=
this._areasum.Sum();crossings=this._crossings;t=this._geod.Direct(this.lat,this.lon,azi,s,this._mask);tempsum+=t.S12;crossings+=transitdirect(this.lon,t.lon2);t=this._geod(t.lat2,t.lon2,this._lat0,this._lon0,this._mask);perimeter+=t.s12;tempsum+=t.S12;crossings+=transit(t.lon2,this._lon0);if(crossings&1)tempsum+=(tempsum<0?1:-1)*this._area0/2;if(!reverse)tempsum*=-1;if(sign)if(tempsum>this._area0/2)tempsum-=this._area0;else{if(tempsum<=-this._area0/2)tempsum+=this._area0}else if(tempsum>=this._area0)tempsum-=
this._area0;else if(tempsum<0)tempsum+=this._area0;vals.area=tempsum;return vals}})(GeographicLib.PolygonArea,GeographicLib.Geodesic,GeographicLib.Math,GeographicLib.Accumulator);window["GeographicLib"]=GeographicLib;window["GeographicLib"]["Geodesic"]=GeographicLib.Geodesic;window["GeographicLib"]["Geodesic"]["Geodesic"]=GeographicLib.Geodesic.Geodesic;var k,q={};window.Melown=q;window.ga=null!=window.ga?window.ga:{};window.MelownMap_=null!=window.MelownMap_?window.MelownMap_:null;window.Q=null!=window.Q?window.Q:{};q.Ic=Array;q.Ml={};q.Ml.create=function(a){var b=new q.Ic(2);a&&(b[0]=a[0],b[1]=a[1]);return b};q.mg={};q.mg.create=function(a){var b=new q.Ic(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};q.mg.bb=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};q.t={};q.t.create=function(a){var b=new q.Ic(3);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);return b};q.t.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};
q.t.add=function(a,b,c){if(!c||a==c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};q.t.Pm=function(a,b,c){if(!c||a==c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};q.t.Dm=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};q.t.scale=function(a,b,c){if(!c||a==c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
q.t.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],h=Math.sqrt(c*c+d*d+e*e);if(h){if(1==h)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;h=1/h;b[0]=c*h;b[1]=d*h;b[2]=e*h;return b};q.t.Gg=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var h=b[0],g=b[1];b=b[2];c[0]=e*b-a*g;c[1]=a*h-d*b;c[2]=d*g-e*h};q.t.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};q.t.bb=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
q.t.Om=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return c*c+d*d+e*e};q.t.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};q.t.rm=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};q.t.gg=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};q.rb={};
q.rb.create=function(a){var b=new q.Ic(9);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9]);return b};q.rb.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};q.rb.w=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
q.rb.xc=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};q.rb.El=function(a,b){b||(b=q.e.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
q.rb.gg=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};q.e={};q.e.create=function(a){var b=new q.Ic(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b};
q.e.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};q.e.w=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
q.e.xc=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],h=a[6],g=a[7],f=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=h;a[11]=a[14];a[12]=e;a[13]=g;a[14]=f;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
q.e.dm=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],h=a[4],g=a[5],f=a[6],l=a[7],n=a[8],p=a[9],m=a[10],r=a[11],w=a[12],s=a[13],y=a[14];a=a[15];return w*p*f*e-n*s*f*e-w*g*m*e+h*s*m*e+n*g*y*e-h*p*y*e-w*p*d*l+n*s*d*l+w*c*m*l-b*s*m*l-n*c*y*l+b*p*y*l+w*g*d*r-h*s*d*r-w*c*f*r+b*s*f*r+h*c*y*r-b*g*y*r-n*g*d*a+h*p*d*a+n*c*f*a-b*p*f*a-h*c*m*a+b*g*m*a};
q.e.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],h=a[3],g=a[4],f=a[5],l=a[6],n=a[7],p=a[8],m=a[9],r=a[10],w=a[11],s=a[12],y=a[13],A=a[14],F=a[15],L=c*f-d*g,D=c*l-e*g,G=c*n-h*g,C=d*l-e*f,K=d*n-h*f,S=e*n-h*l,W=p*y-m*s,X=p*A-r*s,ja=p*F-w*s,wa=m*A-r*y,xa=m*F-w*y,ya=r*F-w*A,aa=1/(L*ya-D*xa+G*wa+C*ja-K*X+S*W);b[0]=(f*ya-l*xa+n*wa)*aa;b[1]=(-d*ya+e*xa-h*wa)*aa;b[2]=(y*S-A*K+F*C)*aa;b[3]=(-m*S+r*K-w*C)*aa;b[4]=(-g*ya+l*ja-n*X)*aa;b[5]=(c*ya-e*ja+h*X)*aa;b[6]=(-s*S+A*G-F*D)*aa;b[7]=(p*S-r*G+w*D)*
aa;b[8]=(g*xa-f*ja+n*W)*aa;b[9]=(-c*xa+d*ja-h*W)*aa;b[10]=(s*K-y*G+F*L)*aa;b[11]=(-p*K+m*G-w*L)*aa;b[12]=(-g*wa+f*X-l*W)*aa;b[13]=(c*wa-d*X+e*W)*aa;b[14]=(-s*C+y*D-A*L)*aa;b[15]=(p*C-m*D+r*L)*aa;return b};q.e.Um=function(a,b){b||(b=q.e.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
q.e.Dl=function(a,b){b||(b=q.rb.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};q.e.Tm=function(a,b){var c=a[0],d=a[1],e=a[2],h=a[4],g=a[5],f=a[6],l=a[8],n=a[9],p=a[10],m=p*g-f*n,r=-p*h+f*l,w=n*h-g*l,s=c*m+d*r+e*w;if(!s)return null;s=1/s;b||(b=q.rb.create());b[0]=m*s;b[1]=(-p*d+e*n)*s;b[2]=(f*d-e*g)*s;b[3]=r*s;b[4]=(p*c-e*l)*s;b[5]=(-f*c+e*h)*s;b[6]=w*s;b[7]=(-n*c+d*l)*s;b[8]=(g*c-d*h)*s;return b};
q.e.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],h=a[2],g=a[3],f=a[4],l=a[5],n=a[6],p=a[7],m=a[8],r=a[9],w=a[10],s=a[11],y=a[12],A=a[13],F=a[14];a=a[15];var L=b[0],D=b[1],G=b[2],C=b[3],K=b[4],S=b[5],W=b[6],X=b[7],ja=b[8],wa=b[9],xa=b[10],ya=b[11],aa=b[12],kb=b[13],lb=b[14];b=b[15];c[0]=L*d+D*f+G*m+C*y;c[1]=L*e+D*l+G*r+C*A;c[2]=L*h+D*n+G*w+C*F;c[3]=L*g+D*p+G*s+C*a;c[4]=K*d+S*f+W*m+X*y;c[5]=K*e+S*l+W*r+X*A;c[6]=K*h+S*n+W*w+X*F;c[7]=K*g+S*p+W*s+X*a;c[8]=ja*d+wa*f+xa*m+ya*y;c[9]=ja*e+wa*l+xa*r+
ya*A;c[10]=ja*h+wa*n+xa*w+ya*F;c[11]=ja*g+wa*p+xa*s+ya*a;c[12]=aa*d+kb*f+lb*m+b*y;c[13]=aa*e+kb*l+lb*r+b*A;c[14]=aa*h+kb*n+lb*w+b*F;c[15]=aa*g+kb*p+lb*s+b*a;return c};q.e.ka=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
q.e.xh=function(a,b){var c;c||(c=b);var d=b[0],e=b[1],h=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*h+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*h+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*h+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*h+a[15]*b;return c};
q.e.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;var h=a[0],g=a[1],f=a[2],l=a[3],n=a[4],p=a[5],m=a[6],r=a[7],w=a[8],s=a[9],y=a[10],A=a[11];c[0]=h;c[1]=g;c[2]=f;c[3]=l;c[4]=n;c[5]=p;c[6]=m;c[7]=r;c[8]=w;c[9]=s;c[10]=y;c[11]=A;c[12]=h*d+n*e+w*b+a[12];c[13]=g*d+p*e+s*b+a[13];c[14]=f*d+m*e+y*b+a[14];c[15]=l*d+r*e+A*b+a[15];return c};
q.e.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
q.e.rotate=function(a,b,c,d){var e=c[0],h=c[1];c=c[2];var g=Math.sqrt(e*e+h*h+c*c);if(!g)return null;1!=g&&(g=1/g,e*=g,h*=g,c*=g);var f=Math.sin(b),l=Math.cos(b),n=1-l;b=a[0];var g=a[1],p=a[2],m=a[3],r=a[4],w=a[5],s=a[6],y=a[7],A=a[8],F=a[9],L=a[10],D=a[11],G=e*e*n+l,C=h*e*n+c*f,K=c*e*n-h*f,S=e*h*n-c*f,W=h*h*n+l,X=c*h*n+e*f,ja=e*c*n+h*f,e=h*c*n-e*f,h=c*c*n+l;d?a!=d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*G+r*C+A*K;d[1]=g*G+w*C+F*K;d[2]=p*G+s*C+L*K;d[3]=m*G+y*C+D*K;d[4]=b*S+r*
W+A*X;d[5]=g*S+w*W+F*X;d[6]=p*S+s*W+L*X;d[7]=m*S+y*W+D*X;d[8]=b*ja+r*e+A*h;d[9]=g*ja+w*e+F*h;d[10]=p*ja+s*e+L*h;d[11]=m*ja+y*e+D*h;return d};q.e.Jm=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],h=a[5],g=a[6],f=a[7],l=a[8],n=a[9],p=a[10],m=a[11];c?a!=c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+l*d;c[5]=h*b+n*d;c[6]=g*b+p*d;c[7]=f*b+m*d;c[8]=e*-d+l*b;c[9]=h*-d+n*b;c[10]=g*-d+p*b;c[11]=f*-d+m*b;return c};
q.e.Km=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],h=a[1],g=a[2],f=a[3],l=a[8],n=a[9],p=a[10],m=a[11];c?a!=c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*-d;c[1]=h*b+n*-d;c[2]=g*b+p*-d;c[3]=f*b+m*-d;c[8]=e*d+l*b;c[9]=h*d+n*b;c[10]=g*d+p*b;c[11]=f*d+m*b;return c};
q.e.Lm=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],h=a[1],g=a[2],f=a[3],l=a[4],n=a[5],p=a[6],m=a[7];c?a!=c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*d;c[1]=h*b+n*d;c[2]=g*b+p*d;c[3]=f*b+m*d;c[4]=e*-d+l*b;c[5]=h*-d+n*b;c[6]=g*-d+p*b;c[7]=f*-d+m*b;return c};
q.e.pj=function(a,b,c,d,e,h,g){g||(g=q.e.create());var f=b-a,l=d-c,n=h-e;g[0]=2*e/f;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2*e/l;g[6]=0;g[7]=0;g[8]=(b+a)/f;g[9]=(d+c)/l;g[10]=-(h+e)/n;g[11]=-1;g[12]=0;g[13]=0;g[14]=-(h*e*2)/n;g[15]=0;return g};q.e.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return q.e.pj(-b,b,-a,a,c,d,e)};
q.e.Fm=function(a,b,c,d,e,h,g){g||(g=q.e.create());var f=b-a,l=d-c,n=h-e;g[0]=2/f;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2/l;g[6]=0;g[7]=0;g[8]=0;g[9]=0;g[10]=-2/n;g[11]=0;g[12]=-(a+b)/f;g[13]=-(d+c)/l;g[14]=-(h+e)/n;g[15]=1;return g};
q.e.vm=function(a,b,c,d){d||(d=q.e.create());var e=a[0],h=a[1];a=a[2];var g=c[0],f=c[1],l=c[2];c=b[1];var n=b[2];if(e==b[0]&&h==c&&a==n)return q.e.w(d);var p,m,r,w;c=e-b[0];n=h-b[1];b=a-b[2];w=1/Math.sqrt(c*c+n*n+b*b);c*=w;n*=w;b*=w;p=f*b-l*n;l=l*c-g*b;g=g*n-f*c;(w=Math.sqrt(p*p+l*l+g*g))?(w=1/w,p*=w,l*=w,g*=w):g=l=p=0;f=n*g-b*l;m=b*p-c*g;r=c*l-n*p;(w=Math.sqrt(f*f+m*m+r*r))?(w=1/w,f*=w,m*=w,r*=w):r=m=f=0;d[0]=p;d[1]=f;d[2]=c;d[3]=0;d[4]=l;d[5]=m;d[6]=n;d[7]=0;d[8]=g;d[9]=r;d[10]=b;d[11]=0;d[12]=
-(p*e+l*h+g*a);d[13]=-(f*e+m*h+r*a);d[14]=-(c*e+n*h+b*a);d[15]=1;return d};q.e.gg=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};q.Qa={};q.Qa.create=function(a){var b=new q.Ic(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};q.Qa.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
q.Qa.am=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};q.Qa.inverse=function(a,b){if(!b||a==b)return a[0]*=1,a[1]*=1,a[2]*=1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};q.Qa.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
q.Qa.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],h=a[3],g=Math.sqrt(c*c+d*d+e*e+h*h);if(0==g)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;b[3]=h*g;return b};q.Qa.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],h=a[2];a=a[3];var g=b[0],f=b[1],l=b[2];b=b[3];c[0]=d*b+a*g+e*l-h*f;c[1]=e*b+a*f+h*g-d*l;c[2]=h*b+a*l+d*f-e*g;c[3]=a*b-d*g-e*f-h*l;return c};
q.Qa.ka=function(a,b,c){c||(c=b);var d=b[0],e=b[1],h=b[2];b=a[0];var g=a[1],f=a[2];a=a[3];var l=a*d+g*h-f*e,n=a*e+f*d-b*h,p=a*h+b*e-g*d,d=-b*d-g*e-f*h;c[0]=l*a+d*-b+n*-f-p*-g;c[1]=n*a+d*-g+p*-b-l*-f;c[2]=p*a+d*-f+l*-g-n*-b;return c};q.Qa.Dl=function(a,b){b||(b=q.rb.create());var c=a[0],d=a[1],e=a[2],h=a[3],g=c+c,f=d+d,l=e+e,n=c*g,p=c*f,c=c*l,m=d*f,d=d*l,e=e*l,g=h*g,f=h*f,h=h*l;b[0]=1-(m+e);b[1]=p-h;b[2]=c+f;b[3]=p+h;b[4]=1-(n+e);b[5]=d-g;b[6]=c-f;b[7]=d+g;b[8]=1-(n+m);return b};
q.Qa.El=function(a,b){b||(b=q.e.create());var c=a[0],d=a[1],e=a[2],h=a[3],g=c+c,f=d+d,l=e+e,n=c*g,p=c*f,c=c*l,m=d*f,d=d*l,e=e*l,g=h*g,f=h*f,h=h*l;b[0]=1-(m+e);b[1]=p-h;b[2]=c+f;b[3]=0;b[4]=p+h;b[5]=1-(n+e);b[6]=d-g;b[7]=0;b[8]=c-f;b[9]=d+g;b[10]=1-(n+m);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};q.Qa.Nm=function(a,b,c,d){d||(d=a);var e=c;0>a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]&&(e=-1*c);d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
q.Qa.gg=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};q.qj=function(a,b,c,d,e,h){var g=b-a,f=d-c,l=h-e;a=q.e.create([2*e/g,0,(b+a)/g,0,0,2*e/f,(d+c)/f,0,0,0,-(h+e)/l,-2*h*e/l,0,0,-1,0]);q.e.xc(a);return a};q.Jk=function(a,b,c,d){a=c*Math.tan(a*Math.PI/360);b*=a;return q.qj(-b,b,-a,a,c,d)};q.Hk=function(a,b,c,d){var e=d-c;a=q.e.create([1/(0.5*a*b),0,0,0,0,1/(0.5*a),0,0,0,0,-2/e,-((d+c)/e),0,0,0,1]);q.e.xc(a);return a};
q.Ha=function(a,b){var c=Math.cos(b),d=Math.sin(b);switch(a){case 0:c=[1,0,0,0,0,c,-d,0,0,d,c,0,0,0,0,1];break;case 1:c=[c,0,-d,0,0,1,0,0,d,0,c,0,0,0,0,1];break;default:c=[c,-d,0,0,d,c,0,0,0,0,1,0,0,0,0,1]}q.e.xc(c);return c};q.ve=function(a,b,c){a=[a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1];q.e.xc(a);return a};q.bl=function(a){return q.ve(a,a,a)};q.wc=function(a,b,c){a=[1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1];q.e.xc(a);return a};q.Vm=function(a){return q.wc(a[0],a[1],0)};q.Wm=function(a){return q.wc(a[0],a[1],a[2])};
q.isEqual=function(a,b,c){return Math.abs(a-b)<c};q.Fc=function(a,b,c){a<b?a=b:a>c&&(a=c);return a};q.ia=function(a){return a*Math.PI/180};q.Kg=function(a){return a/Math.PI*180};q.uk=function(a,b,c){return a+(b-a)*c};q.Qb=function(a,b){return"boolean"===typeof a?a:b};q.$a=function(a,b,c){var d=Number.Tl;return"number"===typeof a?q.Fc(a,b,d):c};q.ni=function(a){return"string"===typeof a?a:null};
q.Gm=function(a,b){if(0>a)return a=-a+"",b--,a.length>=b?"-"+a:"-"+(Array(b-a.length+1).join("0")+a);a+="";return a.length>=b?a:Array(b-a.length+1).join("0")+a};q.Xi=function(a){var b=(a&31744)>>10;fraction=a&1023;return(a>>15?-1:1)*(b?31===b?fraction?NaN:Infinity:Math.pow(2,b-15)*(1+fraction/1024):fraction/1024*6.103515625E-5)};q.Mm=function(a,b){return a.replace(/\{([_$a-zA-Z0-9][_$a-zA-Z0-9]*)\}/g,function(a,d){return d in b?b[d]:a})};
q.il=function(a,b,c){return a.replace(/\{([_$a-zA-Z(-9][_$a-zA-Z(-9]*)\}/g,function(a,e){return e in b?b[e]:c(e)})};q.hm=function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?[parseInt(a[4],16),parseInt(a[3],16),parseInt(a[2],16),parseInt(a[1],16)]:[0,0,0,255]};q.pl=function(){return"("+q.tj+").call(self);"};
q.ne=function(a,b,c,d){var e=new XMLHttpRequest;e.onload=function(){var a=e.response;try{var g=d?a:eval("("+a+")")}catch(f){null!=c&&c();return}null!=b&&b(g)}.bind(this);e.onerror=function(){null!=c&&c()}.bind(this);e.open("GET",a,!0);e.send("")};
q.Hb=function(a,b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){switch(d.readyState){case 0:case 1:case 2:case 3:break;case 4:if(404==d.status){null!=c&&c();break}var a=new DataView(d.response);null!=b&&b(a);break;default:null!=c&&c()}}.bind(this);d.onerror=function(){null!=c&&c()}.bind(this);d.open("GET",a,!0);d.responseType="arraybuffer";d.send("")};window.performance=window.performance||{};
performance.now=performance.now||performance.Bm||performance.Cm||performance.Em||performance.webkitNow||function(){return(new Date).getTime()};window.Jh=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};"undefined"===typeof Array.isArray&&(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});q.isEqual=q.isEqual;
q.clamp=q.Fc;q.mix=q.uk;q.radians=q.ia;q.degrees=q.Kg;q.loadJSON=q.ne;q.loadBinary=q.Hb;
q.Sb={$b:function(){var a=q.Sb;a.$l=a.Nh(a.Ui)||"An unknown browser";a.version=a.Oh(navigator.userAgent.toLowerCase())||a.Oh(navigator.appVersion)||"an unknown version";a.Rb=a.Nh(a.Vi)||"an unknown os: ua: "+navigator.userAgent+" pl: "+navigator.platform;a.wk="iphone/ipod"==a.Rb||"android"==a.Rb||"ipad"==a.Rb||"windows ce"==a.Rb||"windows phone"==a.Rb||"kindle"==a.Rb;a.vk="android"==a.Rb},om:function(){return q.Sb.wk},nm:function(){return q.Sb.vk},Nh:function(a){for(var b=q.Sb,c=0;c<a.length;c++){var d=
a[c].M,e=a[c].Vk;b.pi=a[c].zc||a[c].w;if(d){if(-1!=d.toLowerCase().indexOf(a[c].N))return null!=a[c].version&&(b.version=a[c].version),a[c].w}else if(e)return a[c].w}},Oh:function(a){var b=q.Sb;if(null!=b.version)return b.version;var c=a.indexOf(b.pi);if(-1!=c)return parseFloat(a.substring(c+b.pi.length+1))},Ui:[{M:navigator.userAgent,N:"chrome",w:"chrome"},{M:navigator.userAgent,N:"firefox",w:"firefox"},{M:navigator.vendor,N:"apple",w:"safari",zc:"version"},{Vk:window.opera,w:"opera",zc:"version"},
{M:navigator.vendor,N:"icab",w:"icab"},{M:navigator.vendor,N:"kde",w:"konqueror"},{M:navigator.vendor,N:"camino",w:"camino"},{M:navigator.userAgent,N:"netscape",w:"netscape"},{M:navigator.userAgent,N:"msie",w:"explorer",zc:"msie"},{M:navigator.userAgent,N:"trident/",w:"explorer",version:"11"},{M:navigator.userAgent,N:"edge/",w:"explorer",version:"12"},{M:navigator.userAgent,N:"omniweb",zc:"omniweb/",w:"omniweb"},{M:navigator.userAgent,N:"silk",zc:"silk/",w:"silk"},{M:navigator.userAgent,N:"gecko",
w:"mozilla",zc:"rv"},{M:navigator.userAgent,N:"mozilla",w:"netscape",zc:"mozilla"}],Vi:[{M:navigator.userAgent,N:"windows ce",w:"windows ce"},{M:navigator.userAgent,N:"windows phone",w:"windows phone"},{M:navigator.platform,N:"win",w:"windows"},{M:navigator.platform,N:"mac",w:"mac"},{M:navigator.userAgent,N:"iphone",w:"iphone/ipod"},{M:navigator.userAgent,N:"ipod",w:"iphone/ipod"},{M:navigator.userAgent,N:"ipad",w:"ipad"},{M:navigator.userAgent,N:"android",w:"android"},{M:navigator.userAgent,N:"silk",
w:"kindle"},{M:navigator.userAgent,N:"blackberry",w:"blackberry"},{M:navigator.platform,N:"linux",w:"linux"}]};q.ab={};q.ab.ek=function(a){if("string"!==typeof a)return!1;var b=document.location.hostname;return q.ab.parse(a).hostname===b};q.ab.parse=function(a){if("string"!==typeof a)return null;var b=document.createElement("a");b.href=a;return b};
q.ab.Aj=function(a){var b={};a=q.ab.parse(a).search.substring(1).split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");"undefined"===typeof b[d[0]]?b[d[0]]=d[1]:"string"===typeof b[d[0]]?b[d[0]]=[b[d[0]],d[1]]:b[d[0]].push(d[1])}return b};q.Url=q.ab;q.ab.getParamsFromUrl=q.ab.Aj;q.Ja={};q.Ja.nk=function(a,b){if(!(!a instanceof Image||"string"!==typeof b)){var c=q.ab.parse(b);null!==c&&(""!==c.hostname&&(a.crossOrigin=q.ab.ek(b)?"use-credentials":"anonymous"),a.src=b)}};
q.Ja.qf=function(a,b,c){var d=new Image;d.onerror=c;d.onload=b;q.Ja.nk(d,a);return d};q.Ja.ne=function(a,b,c){q.Hb(a,b,c)};q.Ja.Hb=function(a,b,c){q.Hb(a,b,c)};q.Http=q.Ja;q.Ja.imageFactory=q.Ja.qf;q.Ja.loadJSON=q.ne;q.Ja.loadBinary=q.Hb;
function ca(a){a=this.i=a.i;if(null!=a){this.da=null;this.da=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.da);var b=[0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1];a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);this.da.P=3;this.da.R=b.length/3;this.m=36;this.tf=this.da.R/3}}ca.prototype.n=function(){this.i.deleteBuffer(this.da)};
ca.prototype.Ea=function(a,b){var c=this.i;if(null!=c){var d=a.getAttribute(b);c.bindBuffer(c.ARRAY_BUFFER,this.da);c.vertexAttribPointer(d,this.da.P,c.FLOAT,!1,0,0);c.drawArrays(c.LINES,0,this.da.R)}};function fa(a,b,c,d){this.zb=a;this.ea=null;this.fa=b;this.Hg=null;this.Se=this.Yi=this.Gc({});this.Re=0;this.kh=null==c?!1:c;this.Ci=d?!0:!1}k=fa.prototype;
k.$b=function(){this.ea=document.createElement("canvas");if(null!=this.ea&&(this.ea.width=this.fa[0],this.ea.height=this.fa[1],this.ea.style.display="block",null!=this.ea.getContext)){try{this.i=this.ea.getContext("webgl",{preserveDrawingBuffer:this.kh,antialias:this.Ci,stencil:!0})||this.ea.getContext("experimental-webgl",{preserveDrawingBuffer:this.kh})}catch(a){}this.i&&(this.i.getExtension("OES_standard_derivatives"),this.zb.appendChild(this.ea),this.i.pg=this.ea.width,this.i.og=this.ea.height,
this.i.clearColor(0,0,0,1),this.i.enable(this.i.DEPTH_TEST),this.i.viewport(0,0,this.i.pg,this.i.og),this.i.clear(this.i.COLOR_BUFFER_BIT|this.i.DEPTH_BUFFER_BIT))}};k.resize=function(a,b){this.fa=a;null!=this.ea&&!0!=b&&(this.ea.width=this.fa[0],this.ea.height=this.fa[1]);null!=this.i&&(this.i.pg=this.ea.width,this.i.og=this.ea.height)};function ka(a){a.i.viewport(0,0,a.i.pg,a.i.og)}
k.clear=function(a,b,c){null!=c&&this.i.clearColor(c[0]/255,c[1]/255,c[2]/255,c[3]/255);this.i.clear((a?this.i.COLOR_BUFFER_BIT:0)|(b?this.i.DEPTH_BUFFER_BIT:0))};
k.useProgram=function(a,b,c,d,e,h,g){this.Hg!=a&&(this.i.useProgram(a.Da),this.Hg=a,na(a,"uSampler",0),b=a.getAttribute(b),this.i.enableVertexAttribArray(b),null!=c&&(c=a.getAttribute(c),this.i.enableVertexAttribArray(c)),null!=d&&(d=a.getAttribute(d),this.i.enableVertexAttribArray(d)),null!=e&&(e=a.getAttribute(e),this.i.enableVertexAttribArray(e)),null!=h&&(h=a.getAttribute(h),this.i.enableVertexAttribArray(h)),null!=g&&(a=a.getAttribute(g),this.i.enableVertexAttribArray(a)))};
k.bindTexture=function(a){!1!=a.qd&&(this.i.activeTexture(this.i.TEXTURE0),this.i.bindTexture(this.i.TEXTURE_2D,a.Y))};q.Rl=function(){return!0};fa.prototype.Gc=function(a){null==a.Dc&&(a.Dc=!1);null==a.Jd&&(a.Jd=!1);null==a.Ie&&(a.Ie=0);null==a.Pd&&(a.Pd=!0);null==a.Od&&(a.Od=!0);null==a.Vc&&(a.Vc=!1);null==a.$c&&(a.$c=!0);return a};
fa.prototype.Mb=function(a,b){if(this.Se==a)null!=b&&b!=this.Re&&(this.Re=b,this.i.polygonOffset(-1,b));else{var c=this.i,d=this.Se;b=b||a.Ie;d.Dc!=a.Dc&&(!0==a.Dc?(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA),c.enable(c.BLEND)):c.disable(c.BLEND));d.Jd!=a.Jd&&(!0==a.Jd?c.enable(c.STENCIL_TEST):c.disable(c.STENCIL_TEST));d.Ie!=b&&(0!=b?(c.polygonOffset(-1,b),c.enable(c.POLYGON_OFFSET_FILL)):c.disable(c.POLYGON_OFFSET_FILL),
this.Re=b);d.Pd!=a.Pd&&(!0==a.Pd?c.depthMask(!0):c.depthMask(!1));d.Od!=a.Od&&(0!=a.Od?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST));d.Vc!=a.Vc&&(0!=a.Vc?c.depthFunc(c.LEQUAL):c.depthFunc(c.LESS));d.$c!=a.$c&&(!0==a.$c?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE));this.Se=a}};
q.em=function(a,b,c,d,e){var h=d.td;if(0!=d.Id){var g=d.lj.id;if(null!=g&&null!=c.of)if(1==d.Id){if(c.of[0].id==g)return}else{if(c.of[0].id!=g)return}else if(2==d.Id)return}var f=d.mm&&c.Dh,g=d.Ud;if(f){var l=c.ih,g=[(l&255)/255,(l>>8&255)/255,(l>>16&255)/255,1];c.$j[l]=[d.lj,d.bm,d.Mi,d.Zj,d.gm,d.qm];c.ih++}switch(d.ca){case "flat-line":a.Mb(q.sg,c.jf(d.rg));l=c.Sk;a.useProgram(l,"aPosition",null,null,null);pa(l,"uColor",g);ra(l,"uMVP",h);a=l.getAttribute("aPosition");b.bindBuffer(b.ARRAY_BUFFER,
d.da);b.vertexAttribPointer(a,d.da.P,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.da.R);break;case "flat-tline":case "pixel-line":case "pixel-tline":a.Mb(q.sg,c.jf(d.rg));var l=d.Da,n=null,p=[0,0,0,0];if("pixel-line"!=d.ca){if(f)n=c.He;else{c=d.Y;if(null==c||null==c[0])break;n=c[0];p=[0,c[1]/c[0].ge,(c[1]+c[2])/c[0].ge,0];"flat-tline"==d.ca?p[0]=1/d.sm/(n.Ac/c[2]):(c=d.sf.s.Ma.Sm(d.ua||d.sf.cm)/d.sf.Rm,p[0]=1/n.Ac/c)}if(!1==n.qd)break;a.bindTexture(n)}a.useProgram(l,"aPosition",null,null,null);pa(l,
"uColor",g);sa(l,"uScale",e);ra(l,"uMVP",h);"pixel-line"!=d.ca&&(null!=d.Di&&pa(l,"uColor2",d.Di),pa(l,"uParams",p),na(l,"uSampler",0));a=l.getAttribute("aPosition");h=l.getAttribute("aNormal");b.bindBuffer(b.ARRAY_BUFFER,d.da);b.vertexAttribPointer(a,d.da.P,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.Nl);b.vertexAttribPointer(h,d.Nl.P,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.da.R);break;case "line-label":n=f?c.He:c.oj.Y;l=q.ia(c.Kb[0]);e=[-Math.sin(l),Math.cos(l),0,0];a.Mb(q.vi,c.jf(d.rg));
l=c.Eh;a.bindTexture(n);a.useProgram(l,"aPosition","aTexCoord",null,null);na(l,"uSampler",0);ra(l,"uMVP",h);pa(l,"uVec",e);pa(l,"uColor",g);a=l.getAttribute("aPosition");h=l.getAttribute("aTexCoord");b.bindBuffer(b.ARRAY_BUFFER,d.da);b.vertexAttribPointer(a,d.da.P,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.ng);b.vertexAttribPointer(h,d.ng.P,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.da.R);break;case "icon":case "label":n=f?c.He:d.Y;if(!1==n.qd)break;a.Mb(q.vi,c.jf(d.rg));l=c.Rk;a.bindTexture(n);
a.useProgram(l,"aPosition","aTexCoord",null,"aOrigin");na(l,"uSampler",0);ra(l,"uMVP",h);pa(l,"uScale",[e[0],e[1],"label"==d.ca?1:1/n.Ac,0]);pa(l,"uColor",g);a=l.getAttribute("aPosition");h=l.getAttribute("aTexCoord");g=l.getAttribute("aOrigin");b.bindBuffer(b.ARRAY_BUFFER,d.da);b.vertexAttribPointer(a,d.da.P,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.ng);b.vertexAttribPointer(h,d.ng.P,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.Ol);b.vertexAttribPointer(g,d.Ol.P,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,
0,d.da.R)}};
function ta(a,b,c,d){this.i=a.i;this.k=b.k;this.s=d;this.Pb=this.ub=this.C=null;performance.now();a=b.r;c=b.Fe;d=b.Kl;var e=b.Pl||3,h=b.Jl||2;b=b.Zm||2;var g=this.i;a&&g&&(this.C=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.C),g.bufferData(g.ARRAY_BUFFER,new Float32Array(a),g.STATIC_DRAW),this.C.P=e,this.C.R=a.length/e,null!=c&&(this.ub=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.ub),g.bufferData(g.ARRAY_BUFFER,new Float32Array(c),g.STATIC_DRAW),this.ub.P=h,this.ub.R=c.length/h),null!=
d&&(this.Pb=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.Pb),g.bufferData(g.ARRAY_BUFFER,new Float32Array(d),g.STATIC_DRAW),this.Pb.P=b,this.Pb.R=d.length/b),this.m=this.C.R*e*4,this.m+=null==c?0:this.ub.R*h*4,this.m+=null==d?0:this.Pb.R*b*4,this.Dd=this.C.R/3,this.Md=!0)}ta.prototype.n=function(){this.i&&this.Md&&(this.i.deleteBuffer(this.C),this.i.deleteBuffer(this.ub))};
ta.prototype.Ea=function(a,b,c,d,e){var h=this.i;null!=h&&this.Md&&(b=a.getAttribute(b),h.bindBuffer(h.ARRAY_BUFFER,this.C),h.vertexAttribPointer(b,this.C.P,h.FLOAT,!1,0,0),this.ub&&c&&(c=a.getAttribute(c),h.bindBuffer(h.ARRAY_BUFFER,this.ub),h.vertexAttribPointer(c,this.ub.P,h.FLOAT,!1,0,0)),this.Pb&&d&&(d=a.getAttribute(d),h.bindBuffer(h.ARRAY_BUFFER,this.Pb),h.vertexAttribPointer(d,this.Pb.P,h.FLOAT,!1,0,0)),e&&e&&(a=a.getAttribute(e),h.bindBuffer(h.ARRAY_BUFFER,q.Bc),h.vertexAttribPointer(a,q.Bc.P,
h.FLOAT,!1,0,0)),h.drawArrays(h.TRIANGLES,0,this.C.R))};function ua(a,b,c,d,e,h){this.k=null;this.g=a;this.i=a.i;this.s=b;performance.now();null!=this.i&&(this.r=[],this.C=null,this.tf=c,this.le=e,this.ke=h,this.Hf=d,this.$b())}ua.prototype.n=function(){this.i.deleteBuffer(this.C)};
ua.prototype.$b=function(){if(this.tf){this.le&&za(this,0,this.ke);for(var a=0;a<this.Hf;a++){var b=a,c=a+1,d=this.r.length;this.r[d]=b;this.r[d+1]=c;this.r[d+2]=1;this.r[d+3]=b;this.r[d+4]=c;this.r[d+5]=-1;this.r[d+6]=c;this.r[d+7]=b;this.r[d+8]=1;this.r[d+9]=b;this.r[d+10]=c;this.r[d+11]=1;this.r[d+12]=c;this.r[d+13]=b;this.r[d+14]=1;this.r[d+15]=c;this.r[d+16]=b;this.r[d+17]=-1;this.Dd+=2;this.le&&za(this,a+1,this.ke)}}else if(this.le)for(a=0;a<=this.Hf;a++)za(this,a,this.ke);this.compile()};
function za(a,b,c){var d=a.r.length,e=2*Math.PI/c;for(i=0;i<c;i++)a.r[d]=b,a.r[d+1]=-1,a.r[d+2]=0,a.r[d+3]=b,a.r[d+4]=-2,a.r[d+5]=e*i,a.r[d+6]=b,a.r[d+7]=-2,a.r[d+8]=e*(i+1),d+=9;a.Dd+=c}ua.prototype.compile=function(){var a=this.i;this.C=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.C);a.bufferData(a.ARRAY_BUFFER,new Float32Array(this.r),a.STATIC_DRAW);this.C.P=3;this.C.R=this.r.length/3;this.m=24*this.C.R;this.Dd=this.C.R/3};
ua.prototype.Ea=function(a,b,c){var d=this.i;null==d||null==this.C||c>this.Hf||(a=a.getAttribute(b),d.bindBuffer(d.ARRAY_BUFFER,this.C),d.vertexAttribPointer(a,this.C.P,d.FLOAT,!1,0,0),a=0,this.tf&&(a+=6*(c-1)),this.le&&(a+=3*c*this.ke),d.drawArrays(d.TRIANGLES,0,a))};function v(a,b,c){this.i=a.i;this.Da=null;this.kg=[];this.Le=[];this.createProgram(b,c)}
v.prototype.createShader=function(a,b){var c=this.i;if(!a||!c)return null;var d;d=!0!=b?c.createShader(c.FRAGMENT_SHADER):c.createShader(c.VERTEX_SHADER);c.shaderSource(d,a);c.compileShader(d);return c.getShaderParameter(d,c.COMPILE_STATUS)?d:(alert("An error occurred compiling the shaders: "+c.getShaderInfoLog(d)),null)};
v.prototype.createProgram=function(a,b){var c=this.i;if(null!=c){var d=this.createShader(a,!0),e=this.createShader(b,!1),h=c.createProgram();c.attachShader(h,d);c.attachShader(h,e);c.linkProgram(h);c.getProgramParameter(h,c.LINK_STATUS)||alert("Unable to initialize the shader program.");c.useProgram(h);this.Da=h}};function na(a,b,c){var d=a.i;null!=d&&null!=a.Da&&(a=a.getUniform(b),null!=a&&d.uniform1i(a,c))}
function ra(a,b,c){var d=a.i;null!=d&&null!=a.Da&&(a=a.getUniform(b),null!=a&&d.uniformMatrix4fv(a,!1,c))}function sa(a,b,c){var d=a.i;null!=d&&null!=a.Da&&(a=a.getUniform(b),null!=a&&d.uniform2fv(a,c))}function Ca(a,b,c){var d=a.i;null!=d&&null!=a.Da&&(a=a.getUniform(b),null!=a&&d.uniform3fv(a,c))}function pa(a,b,c){var d=a.i;null!=d&&null!=a.Da&&(a=a.getUniform(b),null!=a&&d.uniform4fv(a,c))}function Da(a,b,c){var d=a.i;null!=d&&null!=a.Da&&(a=a.getUniform(b),null!=a&&d.uniform1f(a,c))}
v.prototype.getAttribute=function(a){var b=this.i;if(null!=b&&null!=this.Da)return null==this.Le[a]?(b=b.getAttribLocation(this.Da,a),this.Le[a]=b):this.Le[a]};v.prototype.getUniform=function(a){var b=this.i;if(null!=b&&null!=this.Da)return null==this.kg[a]?(b=b.getUniformLocation(this.Da,a),this.kg[a]=b):this.kg[a]};q.Gi="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";q.Fi="precision mediump float;\nvoid main() {\ngl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n}";
q.mk="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";q.kk="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";q.hk="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
q.gk="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";q.jk="attribute vec3 aPosition;\nuniform mat4 uMVP;\nuniform vec3 uScale;\nuniform vec3 uPoints[32];\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(uPoints[int(aPosition.x)], 1.0));\nif (aPosition.y < 0.0) {\nif (aPosition.y == -1.0) {\ngl_Position = pp0;\n} else {\ngl_Position = pp0 + vec4((vec3(-sin(aPosition.z)*uScale.x*uScale.z, cos(aPosition.z)*uScale.y*uScale.z, 0.0)), 0.0);\n}\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(uPoints[int(aPosition.y)], 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aPosition.z*uScale.z, n.x*uScale.y*aPosition.z*uScale.z, 0.0)), 0.0);\n}\n}";
q.ik="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";q.bi="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 p=vec4(aPosition.xyz, 1.0);\np.xy+=aNormal.xy;\nif (aNormal.w == 0.0){\nfloat tcy=(uParams[1]+uParams[2])*0.5;\nfloat tdy=uParams[1]-tcy;\nfloat ty=(aNormal.x == 0.0 && aNormal.y == 0.0)?tcy:tcy+tdy*cos(aNormal.z);\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], ty);\n} else {\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\n}\ngl_Position = uMVP * p;\n}";
q.fi="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
q.ai="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\ngl_FragColor = c;\n}";q.Vh="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\nvec4 c2=uColor2;\nc.xyz*=c.w; c2.xyz*=c2.w;\nc=mix(c,c2,1.0-c.w);\nc.xyz/=(c.w+0.00001);\ngl_FragColor = c;\n}";
q.Nk="attribute vec3 aPosition;\nattribute vec3 aNormal;\nuniform mat4 uMVP;\nuniform mat4 uRot;\nuniform vec4 uColor;\nvarying vec4 vColor;\nvoid main(){ \nfloat l = dot((uRot*vec4(aNormal,1.0)).xyz, vec3(0.0,0.0,1.0)) * 0.5;\nvec3 c = uColor.xyz;\nc = (l > 0.0) ? mix(c,vec3(1.0,1.0,1.0),l) : mix(vec3(0.0,0.0,0.0),c,1.0+l);\nvColor = vec4(c, uColor.w);\ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";q.Mk="precision mediump float;\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}";
q.ql="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uVec;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\nif (dot(uVec.xy, aTexCoord.zw) < 0.0) {\ngl_Position = uMVP * vec4(2.0, 0.0, 0.0, 1.0);\n}else{\ngl_Position = uMVP * vec4(aPosition, 1.0);\n}\n}";q.rl="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uPosition;\nuniform float uDepth;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\ngl_Position = uMVP*vec4(aPosition[0]+uPosition[0],-aPosition[1]+uPosition[1],uPosition[2],1.0);\n}";
q.ak="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nattribute vec3 aOrigin;\nuniform mat4 uMVP;\nuniform vec4 uScale;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy * uScale[2];\nvec4 pos = (uMVP * vec4(aOrigin, 1.0));\ngl_Position = pos + vec4(aPosition.x*uScale.x*pos.w, aPosition.y*uScale.y*pos.w, 0.0, 0.0);\n}";q.ig="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord);\nif(c.w < 0.01){ discard; }\ngl_FragColor = c*uColor;\n}";
q.kl="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMVP;\nvarying vec2 vTexCoord;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\nvTexCoord = aTexCoord;\n}";q.jl="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nconst vec4 gray = vec4(0.125, 0.125, 0.125, 1.0);\nvoid main() {\nfloat fade = smoothstep(0.51, 0.55, vTexCoord.t);\ngl_FragColor = mix(texture2D(uSampler, vTexCoord), gray, fade);\n}";q.Xj="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
q.Wj="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 gridColor = mix(texture2D(uSampler, vTexCoord1), texture2D(uSampler, vTexCoord2), uGridBlend);\ngl_FragColor = mix(fogColor, gridColor, vFogFactor);\n}";q.Vj="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
q.Uj="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";q.Al="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\n}";
q.yl="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = mix(fogColor, texture2D(uSampler, vTexCoord), vFogFactor);\n}";q.tl="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord2;\n}";
q.sl="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha;\n}";q.nj="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\n}";
q.mj="precision mediump float;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = vec4(fogColor.xyz, 1.0-vFogFactor);\n}";q.xl="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = camSpacePos.xyz;\n}";
q.wl="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\n#ifdef GL_OES_standard_derivatives\nvec3 nx = dFdx(vBarycentric);\nvec3 ny = dFdy(vBarycentric);\nvec3 normal=normalize(cross(nx,ny));\ngl_FragColor = vec4(vec3(max(0.0,normal.z*(204.0/255.0))+(32.0/255.0)),1.0);\n#else\ngl_FragColor = vec4(1.0,1.0,1.0,1.0);\n#endif\n}";q.$h="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = aBarycentric;\n}";
q.Zh="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\ngl_FragColor = mix(fogColor, vec4( mix(vec3(0.0), texture2D(uSampler, vTexCoord).rgb, edgeFactor()) , 1.0), vFogFactor);\n}";
q.Bl="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\nif (edgeFactor() < 0.5){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); } else { discard; }}";
q.Cl="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord2;\nvBarycentric = aBarycentric;\n}";q.vl="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying float vDepth;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvTexCoord = aTexCoord;\n}";
q.ul="precision mediump float;\nuniform sampler2D uSampler;\nvarying float vDepth;\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";q.ck="\nattribute vec4 aPosition;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uData;\nuniform vec4 uColor;\nuniform float uDepth;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nvoid main(void){\nint i=int(aPosition.x);\nif(i==0) gl_Position=uProjectionMatrix*vec4(floor(uData[0][0]+0.1),floor(uData[0][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[0][2], uData[0][3]);\nif(i==1) gl_Position=uProjectionMatrix*vec4(floor(uData[1][0]+0.1),floor(uData[1][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[1][2], uData[1][3]);\nif(i==2) gl_Position=uProjectionMatrix*vec4(floor(uData[2][0]+0.1),floor(uData[2][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[2][2], uData[2][3]);\nif(i==3) gl_Position=uProjectionMatrix*vec4(floor(uData[3][0]+0.1),floor(uData[3][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[3][2], uData[3][3]);\nvec4 c=uColor*(1.0/255.0);\nc.w*=1.0;\nvColor=c;\n}";
q.bk="precision mediump float;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nuniform sampler2D uSampler;\nvoid main(void){\nvec4 c=texture2D(uSampler, vec2(vTexcoords.x, vTexcoords.y) );\nc*=vColor;\nif(c.w < 0.01){ discard; }\ngl_FragColor = c;\n}";function Ea(a,b,c,d,e,h,g){this.g=a;this.i=a.i;this.Y=null;this.ge=this.Ac=this.m=0;this.ag=h||!1;this.Qg=g||"linear";this.oa=null;this.qd=!1;this.s=c;null!=b&&this.load(b,null,null,e)}Ea.prototype.n=function(){this.i.deleteTexture(this.Y)};
function Fa(a,b,c,d,e,h){var g=a.i;a.Y=g.createTexture();g.bindTexture(g.TEXTURE_2D,a.Y);!0==h?(h=g.REPEAT,a.ag=!0):h=g.CLAMP_TO_EDGE;g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,h);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,h);h=!1;switch(e){case "linear":g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);break;case "trilinear":g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR_MIPMAP_LINEAR);g.texParameteri(g.TEXTURE_2D,
g.TEXTURE_MAG_FILTER,g.LINEAR);h=!0;break;default:g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST)}g.pixelStorei(g.UNPACK_ALIGNMENT,1);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,b,c,0,g.RGBA,g.UNSIGNED_BYTE,d);!0==h&&g.generateMipmap(g.TEXTURE_2D);g.bindTexture(g.TEXTURE_2D,null);a.Ac=b;a.ge=c;a.m=b*c*4;a.qd=!0}
function Ga(a,b,c,d){var e=a.i;performance.now();a.Y=e.createTexture();e.bindTexture(e.TEXTURE_2D,a.Y);!0==d?(d=e.REPEAT,a.ag=!0):d=e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,d);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d);d=!1;a.Qg=c;switch(c){case "linear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);break;case "trilinear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR);e.texParameteri(e.TEXTURE_2D,
e.TEXTURE_MAG_FILTER,e.LINEAR);d=!0;break;default:e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)}!0!=q.Ak&&(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,b),!0==d&&e.generateMipmap(e.TEXTURE_2D));e.bindTexture(e.TEXTURE_2D,null);a.Ac=b.naturalWidth;a.ge=b.naturalHeight;a.m=b.naturalWidth*b.naturalHeight*4;a.qd=!0}
Ea.prototype.load=function(a,b,c){this.oa=q.Ja.qf(a,function(){if(null==this.s||!0!=this.s.U)Ga(this,this.oa,this.Qg,this.ag),this.oa=null}.bind(this),function(){null!=this.s&&!0==this.s.U||null==c||c()}.bind(this))};
Ea.prototype.createFramebuffer=function(a,b){if(null!=this.Y){var c=this.i,d=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,d);d.width=a;d.height=b;c.bindTexture(c.TEXTURE_2D,this.Y);d=c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER,d);c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,a,b);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,this.Y,0);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,d);c.bindTexture(c.TEXTURE_2D,null);
c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null)}};q.Hm=1.1;q.Qm=1;q.Ak=!1;q.sg=null;
function Ja(a,b,c,d){this.j=d||{};this.Ya(d);this.s=a;this.Eh=this.Fh=this.Gh=this.Ed=this.Uf=null;this.zb=b;this.Dh=this.Fk=this.Ek=this.U=!1;this.of=null;this.ih=0;this.$j=[];this.Zj=this.Mi=null;a=this.zb.getBoundingClientRect();this.fa=[a.width,a.height];this.I=!0;this.Bg=[0,1,0];this.Fb=this.s.Tb.Fb;this.g=new fa(b,this.fa,this.j.Zf,this.j.$f);this.l=new Ka(this,this.s.Tb.Me,2,this.s.Tb.Sd);q.e.create();q.e.create();q.e.create();q.e.create();this.dd=this.md=this.tb=this.ye=this.he=this.nf=null;
this.Yj=this.s.Tb.ie;this.oj=this.Jc=this.oc=this.pc=this.Hh=null;this.Hc=0;q.e.create();window.addEventListener("resize",this.Bh.bind(this),!1);this.g.$b();this.Uf=new v(this.g,q.Al,q.yl);this.Tk=new v(this.g,q.tl,q.sl);this.Qk=new v(this.g,q.nj,q.mj);this.Gh=new v(this.g,q.$h,q.Zh);this.Fh=new v(this.g,q.$h,q.Bl);this.Uk=new v(this.g,q.Cl,q.Zh);this.Pk=new v(this.g,q.xl,q.wl);new v(this.g,q.Xj,q.Wj);this.Ed=new v(this.g,q.kl,q.jl);new v(this.g,q.vl,q.ul);new v(this.g,q.Vj,q.Uj);this.Oc=new v(this.g,
q.Gi,q.Fi);this.Sk=new v(this.g,q.mk,q.kk);new v(this.g,q.hk,q.gk);this.Pc=new v(this.g,q.jk,q.ik);new v(this.g,q.bi,q.ai);new v(this.g,q.fi,q.ai);new v(this.g,q.bi,q.Vh);new v(this.g,q.fi,q.Vh);new v(this.g,q.Nk,q.Mk);this.Eh=new v(this.g,q.ql,q.ig);new v(this.g,q.rl,q.ig);this.ha=new v(this.g,q.ck,q.bk);this.Rk=new v(this.g,q.ak,q.ig);b=q.Sa.Hi();this.nf=new ta(this.g,b,0,this.s);b=new Uint8Array(16384);for(a=0;64>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),1>a||63<=a||1>c||63<=c?(b[d]=255,b[d+1]=255,b[d+
2]=255):(b[d]=32,b[d+1]=32,b[d+2]=32),b[d+3]=255;this.he=new Ea(this.g);Fa(this.he,64,64,b,"trilinear",!0);b=q.Sa.Ii();this.ye=new ta(this.g,b,0,this.s);this.tb=new Ea(this.g,this.s.Tb.tb,this.s);b=this.Yj;a=new Uint8Array(b*b*4);this.md=new Ea(this.g);Fa(this.md,b,b,a);this.md.createFramebuffer(b,b);this.dd=new Ea(this.g);Fa(this.dd,b,b,a);this.dd.createFramebuffer(b,b);b=new Uint8Array(2048);a="............................................................ xxx..x..xxx.xxx.x...xxx.xxx.xxx.xxx.xxx..................... x.x.xx....x...x.x...x...x.....x.x.x.x.x......x.............. x.x..x..xxx.xxx.x...xxx.xxx...x.xxx.xxx.........x.x.xxx..... x.x..x..x.....x.xxx...x.x.x...x.x.x...x......x...x.......... xxx..x..xxx.xxx..x..xxx.xxx...x.xxx.xxx..x......x.x......... ............................................................".split(" ");
this.Wh={0:0,1:4,2:8,3:12,4:16,5:20,6:24,7:28,8:32,9:36,".":40,":":44,x:48,"-":52," ":56};b=new Uint8Array(2048);for(c=0;8>c;c++)for(d=0;64>d;d++){var e=4*(64*c+d);b[e]=0;b[e+1]=0;b[e+2]=0;b[e+3]=255}c=0;for(var h=a.length;c<h;c++){var g=a[c];d=0;for(var f=g.length;d<f;d++)e=4*(64*c+d),"."!=g.charAt(d)&&(b[e]=255,b[e+1]=255,b[e+2]=255)}this.Xh=new Ea(this.g);Fa(this.Xh,64,8,b);b=this.g.i;this.pc=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,this.pc);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,
0,0,1,1,0,0,1,2,0,0,1,3,0,0,1]),b.STATIC_DRAW);this.pc.P=4;this.pc.R=4;this.oc=b.createBuffer();b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this.oc);b.bufferData(b.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,2,1,0,3,2]),b.STATIC_DRAW);this.oc.P=1;this.oc.R=6;b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.Hh=new Ea(this.g);Fa(this.Hh,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=255,b[d+2]=255,b[d+
3]=255;this.He=new Ea(this.g);Fa(this.He,16,16,b);new Uint8Array(2048);e="............................................................ .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ ............................................................".split(" ");
b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=0;a=0;for(h=e.length;a<h;a++)for(g=e[a],c=0,f=g.length;c<f;c++)d=4*(64*a+c),"."!=g.charAt(c)&&(b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255);this.lk=new Ea(this.g);Fa(this.lk,64,8,b,"linear",!0);this.tg=new ca(this.g);this.ue=new Float32Array(96);this.Lk=new ua(this.g,this.s,!0,64,!0,8);new ua(this.g,this.s,!1,64,!0,8);b=Array(196605);for(a=0;196605>a;a+=9)b[a]=1,b[a+1]=0,b[a+2]=0,b[a+3]=0,b[a+4]=1,b[a+
5]=0,b[a+6]=0,b[a+7]=0,b[a+8]=1;a=this.g.i;q.Bc=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,q.Bc);a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);q.Bc.P=3;q.Bc.R=b.length/3;!0==window.MelownMobile_&&null!=this.g.ea&&(this.g.ea.style.width="100%",this.g.ea.style.height="100%");b=window.MelownScreenScaleFactor_;Na(this,Math.floor(this.fa[0]*b),Math.floor(this.fa[1]*b))}k=Ja.prototype;k.Bh=function(){if(!0!=this.U){var a=this.zb.getBoundingClientRect();Na(this,Math.floor(a.width),Math.floor(a.height))}};
k.n=function(){!0!=this.U&&(this.U=!0,null!=this.Kk&&this.Kk.n(),this.Eb.reset(),null!=this.nf&&this.nf.n(),null!=this.he&&this.he.n(),null!=this.ye&&this.ye.n(),null!=this.tb&&this.tb.n(),null!=this.md&&this.md.n(),null!=this.dd&&this.dd.n(),this.zb.removeChild(this.g.ea))};
function Na(a,b,c){var d=a.l;d.Wc=b/c;d.I=!0;a.fa=[b,c];a.g.resize(a.fa,void 0);Oa(a);d=[];d[0]=2/b;d[1]=0;d[2]=0;d[3]=0;d[4]=0;d[5]=-2/c;d[6]=0;d[7]=0;d[8]=0;d[9]=0;d[10]=1;d[11]=0;d[12]=0.5*-b*d[0];d[13]=0.5*-c*d[5];d[14]=0;d[15]=1;a.Jc=d}function Pa(a,b,c){var d=[0,0,0,1],d=q.e.xh(c,[b[0],b[1],b[2],1]);return 0!=d[3]?(b=[0,0,0],b[0]=0.5*(d[0]/d[3]+1)*a.fa[0],b[1]=0.5*(-(d[1]/d[3])+1)*a.fa[1],b[2]=d[2]/d[3],b):[0,0,0]}k.Ya=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.Ia(b,a[b])};
k.Ia=function(a,b){switch(a){case "rendererAntialiasing":this.j.$f=q.Qb(b,!0);break;case "rendererAllowScreenshots":this.j.Zf=q.Qb(b,!1)}};k.cb=function(a){switch(a){case "rendererAntialiasing":return this.j.$f;case "rendererAllowScreenshots":return this.j.Zf}};function E(a){this.o=a;this.g=a.g}k=E.prototype;k.clear=function(a){null!=a&&this.g.clear(a.clearDepth||!0,a.clearColor||!1,a.color||[255,255,255,255],a.depth||1);return this};
k.Gc=function(a){return null!=a?null:this.g.Gc({Dc:a.blend||!1,Jd:a.stencil||!1,Ie:a.zoffset||0,Pd:a.zwrite||!0,Od:a.ztest||!0,Vc:a.zequal||!0,$c:a.culling||!0})};k.Mb=function(a){null!=a&&this.g.Mb(a);return this};
k.createTexture=function(a){if(null==a||"object"!==typeof a)return null;var b=a.source;if(null==b)return null;var c=a.filter||"linear",d=a.repeat||!1;if(b instanceof Uint8Array){var e=a.width;a=a.height;if(e&&a){var h=new Ea(this.g);Fa(h,e,a,b,filter,d);return h}}return b instanceof Image?(h=new Ea(this.g),Ga(h,b,c,d),h):null};k.$k=function(a){a&&a.n();return this};
k.Ti=function(a){return null==a||"object"!==typeof a?null:new ta(this.g,{r:a.vertices,Fe:a.vertices,Pl:a["vertex-size"],Jl:a["uv-size"],k:a.bbox},0,this.o.s)};k.Yk=function(a){a&&a.n();return this};k.createProgram=function(a){if(null==a||"object"!==typeof a)return null;var b=a["vertex-shader"];a=a["fragment-shader"];if(null!=b&&a)return new v(this.g,b,a)};k.Zk=function(a){null!=a&&null!=a.n&&resource.n();return this};k.Ai=function(){return this};k.Li=function(){return this};
k.fj=function(a,b){if(null==b||"object"!==typeof b||null==b.mesh)return this;var c=this.o;a=b.mesh;var d=b.program||c.Uf,e=b["program-options"];c.g.useProgram(d,"aPosition","aTexCoord",null,null);if(e)for(var h in e)switch(e[h][0]){case "floatArray":var g=e[h][1],f=d.i;if(null!=f&&null!=d.Da){var l=d.getUniform(h);null!=l&&f.uniform1fv(l,g)}break;case "float":Da(d,h,e[h][1]);break;case "mat4":ra(d,h,e[h][1]);break;case "vec2":sa(d,h,e[h][1]);break;case "vec3":Ca(d,h,e[h][1]);break;case "vec4":pa(d,
h,e[h][1]);break;case "sampler":na(d,h,e[h][1])}else e=q.e.create(),q.e.multiply(Qa(c.l),submesh_.gd(cameraPos_),e),h=Ra(c.l),ra(d,"uMV",e),ra(d,"uProj",h),Da(d,"uFogDensity",c.Hc);null!=texture_&&null!=texture_.Fa&&c.g.bindTexture(texture_.Fa);a.Ea(d,"aPosition","aTexCoord",null,null);return this};
k.drawImage=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.rect)return this;var b=a.rect;this.o.drawImage(b[0],b[1],b[2],b[3],a.texture,a.color||[255,255,255,255],a.depth||0,a["depth-test"]||!1,a.blend||!1,a["write-depth"]||!1,a["use-state"]||!1);return this};k.Ve=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.mvp)return this;this.o.Ve(a.mvp,a.texture,a.color||[255,255,255,255],a["depth-test"]||!1,a.blend||!1,a["write-depth"]||!1,a["use-state"]||!1);return this};
k.Zd=function(a){if(null==a||"object"!==typeof a||null==a.points)return this;this.o.Zd(a.points,a.size||2,a.color||[255,255,255,255],a["depth-test"]||!1,a.blend||!1,a["use-state"]||!1);return this};k.cj=function(){return this};k.cd=function(){return this};k.$i=function(){return this};k.ed=function(a,b){return Pa(this.o,a,b)};k.uj=function(){return this.o.fa.slice()};k.Ya=function(a){this.o.Ya(a);return this};k.Ia=function(a,b){this.o.Ia(a,b);return this};k.cb=function(a){return this.o.cb(a,value_)};
E.prototype.clear=E.prototype.clear;E.prototype.createState=E.prototype.Gc;E.prototype.setState=E.prototype.Mb;E.prototype.createTexture=E.prototype.createTexture;E.prototype.removeTexture=E.prototype.$k;E.prototype.createMesh=E.prototype.Ti;E.prototype.removeMesh=E.prototype.Yk;E.prototype.createProgram=E.prototype.createProgram;E.prototype.removeResource=E.prototype.Zk;E.prototype.addJob=E.prototype.Ai;E.prototype.clearJobs=E.prototype.Li;E.prototype.drawMesh=E.prototype.fj;
E.prototype.drawImage=E.prototype.drawImage;E.prototype.drawBillboard=E.prototype.Ve;E.prototype.drawLineString=E.prototype.Zd;E.prototype.drawJobs=E.prototype.cj;E.prototype.drawBBox=E.prototype.cd;E.prototype.drawDebugText=E.prototype.$i;E.prototype.getCanvasCoords=E.prototype.ed;E.prototype.getCanvasSize=E.prototype.uj;E.prototype.setConfigParams=E.prototype.Ya;E.prototype.setConfigParam=E.prototype.Ia;E.prototype.getConfigParam=E.prototype.cb;
function Sa(a,b,c,d,e,h){this.q=[];this.B=[];this.q[0]=null!=a?a:Number.POSITIVE_INFINITY;this.q[1]=null!=b?b:Number.POSITIVE_INFINITY;this.q[2]=null!=c?c:Number.POSITIVE_INFINITY;this.B[0]=null!=d?d:Number.NEGATIVE_INFINITY;this.B[1]=null!=e?e:Number.NEGATIVE_INFINITY;this.B[2]=null!=h?h:Number.NEGATIVE_INFINITY;this.tk=Math.abs(Math.max(this.B[0]-this.q[0],this.B[1]-this.q[1],this.B[2]-this.q[2]))}Sa.prototype.ja=function(){return new Sa(this.q[0],this.q[1],this.q[2],this.B[0],this.B[1],this.B[2])};
function Ua(a,b){return a.B[b]-a.q[b]}Sa.prototype.Ji=function(a){return null!=a?(a[0]=0.5*(this.q[0]+this.B[0]),a[1]=0.5*(this.q[1]+this.B[1]),a):[0.5*(this.q[0]+this.B[0]),0.5*(this.q[1]+this.B[1]),0.5*(this.q[2]+this.B[2])]};
function Ka(a,b,c,d){this.sb=a;this.F=[0,0,0];this.Kb=[0,0,0];this.Wc=1;this.Ye=b;this.vd=c;this.Xb=d;this.cg=!1;this.sd=q.e.create();this.Hd=q.e.create();this.Fd=q.e.create();this.td=q.e.create();this.pb=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];this.Lh=[0,0,0,0];this.I=!0}k=Ka.prototype;k.kb=function(a){this.F=a;this.I=!0};k.Rc=function(a){this.cg=!1;this.Kb=a;this.I=!0};
k.ja=function(a){a=new Ka(this.sb,null!=a?a:this.Cb(),this.vd,this.Xb);a.kb(this.Db());a.Rc(this.La());a.Wc=this.Wc;a.I=!0;a.update();return a};k.Db=function(){return[this.F[0],this.F[1],this.F[2]]};k.La=function(){return[this.Kb[0],this.Kb[1],this.Kb[2]]};k.Cb=function(){return this.Ye};function Qa(a){a.I&&a.update();return a.sd}function Ra(a){a.I&&a.update();return a.Fd}function Va(a){a.I&&a.update();return a.td}
function P(a,b){a.I&&a.update();q.e.ka(a.sd,b,a.Lh);var c=q.t.length(a.Lh);return c<a.vd?[Number.POSITIVE_INFINITY,c]:[a.Fd[0]/c,c]}
k.Rd=function(a,b){this.I&&this.update();var c=a.q,d=a.B;null!=b&&(c=[c[0]-b[0],c[1]-b[1],c[2]-b[2]],d=[d[0]-b[0],d[1]-b[1],d[2]-b[2]]);c=[[c[0],c[1],c[2],1],[c[0],c[1],d[2],1],[c[0],d[1],c[2],1],[c[0],d[1],d[2],1],[d[0],c[1],c[2],1],[d[0],c[1],d[2],1],[d[0],d[1],c[2],1],[d[0],d[1],d[2],1]];for(d=0;6>d;d++){for(var e=!0,h=0;8>h;h++)if(0<=q.mg.bb(this.pb[d],c[h])){e=!1;break}if(e)return!1}return!0};
k.update=function(){this.cg||(q.e.multiply(q.Ha(2,q.ia(-this.Kb[2])),q.Ha(0,q.ia(-this.Kb[1]-90)),this.Hd),q.e.multiply(this.Hd,q.Ha(2,q.ia(-this.Kb[0])),this.Hd));q.e.multiply(this.Hd,q.wc(-this.F[0],-this.F[1],-this.F[2]),this.sd);this.Fd=!0==this.Gk?q.Hk(this.ri,this.Wc,this.vd,this.Xb):q.Jk(this.Ye,this.Wc,this.vd,this.Xb);q.e.multiply(this.Fd,this.sd,this.td);this.pb[0]=[0,0,1,1];this.pb[1]=[0,0,-1,1];this.pb[2]=[1,0,0,1];this.pb[3]=[-1,0,0,1];this.pb[4]=[0,1,0,1];this.pb[5]=[0,-1,0,1];var a=
q.e.create();q.e.xc(this.td,a);for(var b=0;6>b;b++)this.pb[b]=q.e.xh(a,this.pb[b]);this.I=!1};
Ja.prototype.Zd=function(a,b,c,d,e,h,g){var f=this.g.i,l=0,n=a.length;if(32<n)for(var p=0;p<n;p+=31)this.Zd(a.slice(p,p+32),b,c,d,e,h,g);else{for(p=0;p<n;p++){var m=a[p];this.ue[l]=m[0];this.ue[l+1]=m[1];this.ue[l+2]=m[2]||0;l+=3}!0!=g&&(!0!=d&&f.disable(f.DEPTH_TEST),!0==e&&(f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA),f.enable(f.BLEND)),!1===h&&f.depthMask(!1),f.disable(f.CULL_FACE));this.g.useProgram(this.Pc,"aPosition",
null);ra(this.Pc,"uMVP",this.Jc);Ca(this.Pc,"uScale",[2/this.fa[0],2/this.fa[1],0.5*b]);pa(this.Pc,"uColor",null!=c?c:[255,255,255,255]);Ca(this.Pc,"uPoints",this.ue);this.Lk.Ea(this.Pc,"aPosition",n);!0!=g&&(!0!=d&&f.enable(f.DEPTH_TEST),!0==e&&f.disable(f.BLEND),!1===h&&f.depthMask(!1),f.enable(f.CULL_FACE))}};
Ja.prototype.drawImage=function(a,b,c,d,e,h,g,f,l,n,p){if(null!=e&&null!=this.Jc){var m=this.g.i;!0!=p&&(!0!=f&&m.disable(m.DEPTH_TEST),!0==l&&(m.blendEquationSeparate(m.FUNC_ADD,m.FUNC_ADD),m.blendFuncSeparate(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA),m.enable(m.BLEND)),!1===n&&m.depthMask(!1),m.disable(m.CULL_FACE));this.g.useProgram(this.ha,"aPosition",null);this.g.bindTexture(e);e=this.pc;m.bindBuffer(m.ARRAY_BUFFER,e);m.vertexAttribPointer(this.ha.getAttribute("aPosition"),
e.P,m.FLOAT,!1,0,0);e=this.oc;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e);ra(this.ha,"uProjectionMatrix",this.Jc);ra(this.ha,"uData",[a,b,0,0,a+c,b,1,0,a+c,b+d,1,1,a,b+d,0,1]);pa(this.ha,"uColor",null!=h?h:[255,255,255,255]);Da(this.ha,"uDepth",null!=g?g:0);m.drawElements(m.TRIANGLES,e.R,m.UNSIGNED_SHORT,0);!0!=p&&(!1===n&&m.depthMask(!0),!0!=f&&m.enable(m.DEPTH_TEST),!0==l&&m.disable(m.BLEND),m.enable(m.CULL_FACE))}};
Ja.prototype.Ve=function(a,b,c,d,e,h,g){var f=this.g.i;!0!=g&&(!0!=d&&f.disable(f.DEPTH_TEST),!0==e&&(f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA),f.enable(f.BLEND)),!1===h&&f.depthMask(!1),f.disable(f.CULL_FACE));this.g.useProgram(this.ha,"aPosition","aTexCoord");this.g.bindTexture(b);na(this.ha,"uSampler",0);b=this.pc;f.bindBuffer(f.ARRAY_BUFFER,b);f.vertexAttribPointer(this.ha.getAttribute("aPosition"),b.P,f.FLOAT,
!1,0,0);b=this.oc;f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,b);ra(this.ha,"uProjectionMatrix",a);ra(this.ha,"uData",[0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1]);pa(this.ha,"uColor",null!=c?c:[255,255,255,255]);Da(this.ha,"uDepth",0);f.drawElements(f.TRIANGLES,b.R,f.UNSIGNED_SHORT,0);!0!=g&&(!1===h&&f.depthMask(!0),!0!=d&&f.enable(f.DEPTH_TEST),!0==e&&f.disable(f.BLEND),f.enable(f.CULL_FACE))};
function Wa(a,b,c,d,e,h,g){if(null!=a.Jc){var f=a.g.i;f.disable(f.CULL_FACE);f.enable(f.DEPTH_TEST);null==g&&f.disable(f.DEPTH_TEST);a.g.useProgram(a.ha,"aPosition",null);a.g.bindTexture(a.Xh);var l=a.pc;f.bindBuffer(f.ARRAY_BUFFER,l);f.vertexAttribPointer(a.ha.getAttribute("aPosition"),l.P,f.FLOAT,!1,0,0);l=a.oc;f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,l);ra(a.ha,"uProjectionMatrix",a.Jc);pa(a.ha,"uColor",h);Da(a.ha,"uDepth",null!=g?g:0);h=1.75*d;for(var n=b,p=0,m=e.length;p<m;p++){var r=a.Wh[e.charAt(p)];
ra(a.ha,"uData",[b,c,0.015625*r,0,b+d,c,0.015625*(r+4),0,b+d,c+h,0.015625*(r+4),0.875,b,c+h,0.015625*r,0.875]);f.drawElements(f.TRIANGLES,l.R,f.UNSIGNED_SHORT,0);b+=d}b=n-1;r=a.Wh[" "];ra(a.ha,"uData",[b,c,0.015625*r,0,b+d,c,0.015625*(r+4),0,b+d,c+h,0.015625*(r+4),0.875,b,c+h,0.015625*r,0.875]);f.drawElements(f.TRIANGLES,l.R,f.UNSIGNED_SHORT,0);f.enable(f.CULL_FACE);null==g&&f.enable(f.DEPTH_TEST)}}
function Oa(a){a.g.clear(!0,!1);if(!0!=a.Fk&&!0!=a.Ek&&!0!=a.Dh){a.g.i.disable(a.g.i.CULL_FACE);var b=q.e.create();q.e.multiply(q.ve(2,2,2),q.wc(-0.5,-0.5,-0.5),b);var c=q.e.create(),d=a.l.Db();q.e.multiply(q.wc(d[0],d[1],d[2]-400),q.bl(Math.min(0.9*a.l.Xb,6E5)),c);d=q.e.create();q.e.multiply(Va(a.l),c,d);q.e.multiply(d,b,d);a.g.useProgram(a.Ed,"aPosition","aTexCoord");a.g.bindTexture(a.tb);na(a.Ed,"uSampler",0);ra(a.Ed,"uMVP",d);a.g.i.depthMask(!1);a.ye.Ea(a.Ed,"aPosition","aTexCoord");a.g.i.depthMask(!0);
a.g.i.enable(a.g.i.CULL_FACE)}}q.Sa={};q.Sa.xe=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=b[2];a[e+3]=c[0];a[e+4]=c[1];a[e+5]=c[2];a[e+6]=d[0];a[e+7]=d[1];a[e+8]=d[2]};q.Sa.we=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=c[0];a[e+3]=c[1];a[e+4]=d[0];a[e+5]=d[1]};
q.Sa.Hi=function(){var a=5;a--;for(var b=q.Sa,c=a*a*2,d=new Float32Array(9*c),c=new Float32Array(6*c),e=1*a,h=0,g=0,f=0;f<a;f++)for(var l=0;l<a;l++){var n=l*e,p=(l+1)*e,m=f*e,r=(f+1)*e;b.xe(d,[n,m,0],[p,m,0],[p,r,0],h);b.we(d,[n,m],[p,m],[p,r],g);h+=9;g+=6;b.xe(d,[p,r,0],[n,r,0],[n,m,0],h);b.we(d,[p,r],[n,r],[n,m],g);h+=9;g+=6}return{k:new Sa(0,0,0,1,1,1),r:d,Fe:c}};
q.Sa.ze=function(a,b){b*=Math.PI;a=2*a*Math.PI;return[Math.cos(a)*Math.sin(b)*0.5+0.5,Math.sin(a)*Math.sin(b)*0.5+0.5,0.5*Math.cos(b)+0.5]};q.Sa.Ii=function(){for(var a=q.Sa,b=new Float32Array(36864),c=new Float32Array(24576),d=0,e=0,h=0;32>h;h++)for(var g=0;64>g;g++)a.ok(g/64,h/32,(g+1)/64,(h+1)/32,b,d,c,e),d+=18,e+=12;return{k:new Sa(0,0,0,1,1,1),r:b,Fe:c}};
q.Sa.ok=function(a,b,c,d,e,h,g,f){var l=q.Sa,n=[a,b],p=l.ze(a,d),m=[a,d],r=l.ze(c,b),w=[c,b],s=l.ze(c,d);c=[c,d];l.xe(e,p,l.ze(a,b),r,h);l.we(g,m,n,w,f);l.xe(e,r,s,p,h+9);l.we(g,w,c,m,f+6)};q.Bc=null;
function Xa(a,b,c,d){this.j=d||{};this.Ya(d);this.s=a;this.Pa=this.s.df();this.Ma=b;this.Tb=a.Tb;this.U=!1;this.ji=0;this.j=d||{};this.vf=!1;this.Ei=c.split("?")[0].split("/").slice(0,-1).join("/")+"/";this.F=new R(this,["obj",0,0,"fix",0,0,0,0,0,0]);this.qh=this.F.ja();this.tc={};this.jb={};this.p={};this.Qe={};this.za=[];this.kf=[];this.ob=[];this.la=[];this.jh=null;this.ad=new Ya(0,{});this.Ig="";this.ud=[];this.Nd=0;this.hg=[];this.Th=[];this.nb=[];this.Ge={rf:[],wh:[]};this.fc=[];this.Eb=new Za(this,
1048576*this.j.Bf);this.qc=new Za(this,1048576*this.j.yf);this.hc=new Za(this,1048576*this.j.Ef);this.Ib=new $a(this,this.j.zf);this.o=this.s.o;this.l=this.o.l;this.Ec=10;this.Ne=[0,0,0];this.G=new ab(this);var e;a=this.Ma.srses;this.tc={};if(null==a)e=!1;else{for(e in a)b=new bb(this,e,a[e]),this.tc[e]=b;e=!0}if(e&&(e=this.Ma.referenceFrame,null==e?e=!1:(this.jb=new cb(this,e),e=!1==this.jb.Md?!1:!0),e)){var h;e=this.Ma.credits;this.p={};if(null==e)h=!1;else{for(h in e)a=h,b=new db(this,e[h]),this.p[a]=
b,this.Qe[b.f]=b,b.lh=a;h=!0}if(h){h=this.Ma.surfaces;this.za=[];if(null==h)h=!1;else{e=0;for(a=h.length;e<a;e++)b=new eb(this,h[e]),this.za.push(b),b.d=this.za.length-1;h=!0}if(h){h=this.Ma.glue;this.kf=[];if(null!=h)for(e=0,a=h.length;e<a;e++)b=new q.yi(this,h[e],!0),this.kf[b.f.join(";")]=b;h=this.Ma.boundLayers;this.la=[];if(null!=h)for(var g in h)e=new gb(this,h[g]),this.la[g]=e;g=this.Ma.freeLayers;this.ob=[];if(null!=g)for(var f in g)h=new q.xi(this,g[f]),this.ob[f]=h;f=this.Ma.namedViews;
this.ud=[];if(null!=f)for(var l in f)g=new Ya(0,f[l]),this.ud[l]=g;l=this.Ma.view;null!=l&&(this.jh=JSON.parse(JSON.stringify(l)))}}}null!=this.Ma.position&&this.kb(this.Ma.position,!1);this.sc(this.jh);l=this.jb.bd.aa;f=0;for(g=l.length;f<g;f++)this.fc.push(new hb(this,l[f],!1));this.Mc=0.5*this.o.fa[0];this.hj=this.dj=this.Ng=!1;this.jj=0;this.aj=this.bj=!1;this.We=this.j.Af;this.Wi=1;this.Hc=0;this.ij=this.o.g.Gc({});this.Zi=this.o.g.Gc({Vc:!0,Dc:!0});this.pa=[];this.Qd("map",this.ej.bind(this),
!0)}k=Xa.prototype;k.n=function(){this.U=!0;null!=this.o&&(this.o.n(),this.o=null)};k.de=function(){return this.s.dk.de()};k.ff=function(){return ib(this.tc)};k.bf=function(){return ib(this.p)};function jb(a,b){var c;a:{c=a.za;for(var d=0,e=c.length;d<e;d++)if(c[d].f==b){c=c[d];break a}c=null}return c}k.gf=function(){for(var a=[],b=0,c=this.za.length;b<c;b++)a.push(this.za[b].f);return a};k.af=function(){return ib(this.la)};k.be=function(){return ib(this.ob)};
function mb(a,b){return null==b?null:-1!=b.indexOf("+proj")?new bb(a,{srsDef:b}):a.tc[b]}
k.sc=function(a,b){if(null!=a){if("string"===typeof a){a=this.ud[id_];if(!a)return;this.sc(a)}var c=JSON.stringify(a);if(c!=this.Ig||b)this.ad.parse(a),this.Ig=c,this.ob=this.ad.ob,this.Nd++;var d=this.ad;this.hg=[];this.Th=[];var c=[],e;for(e in d.za)c.push(e);do{var h=!0;e=0;for(var g=c.length-1;e<g;e++)jb(this,c[e+1]).d<jb(this,c[e]).d&&(h=c[e],c[e]=c[e+1],c[e+1]=h,h=!1)}while(!h);d=[];g=c.length;h=2<<g-1;for(e=1;e<h;e++){for(var f=0,l="",n="",p=0,m=0;m<g;m++)e&1<<m&&(f?(l+=";"+c[m],n=m+"."+n):
(l=c[m],n=""+m,p=m),f++);1<f?(f=this.kf[l],null!=f&&d.push([n,f,!1])):d.push([n,jb(this,l),!0,p])}do for(h=!0,e=0,g=d.length-1;e<g;e++)d[e][0]<d[e+1][0]&&(h=d[e],d[e]=d[e+1],d[e+1]=h,h=!1);while(!h);c=c.length-1;e=0;for(g=d.length;e<g;e++)this.hg.push(d[e][1]),d[e][1].Ql=c,d[e][2]&&(c--,this.Th.push(d[e][1]));var c=this.ad,r;for(r in c.za)if(e=c.za[r],d=jb(this,r),null!=d)for(d.nb=[],g=0,h=e.length;g<h;g++)if(n=e[g],"string"===typeof n)(f=this.la[n])&&d.nb.push([f,1]);else if(f=this.la[n.id])l=1,
"undefined"!==typeof n.alpha&&(l=n.alpha),d.nb.push([f,l]);this.I=!0}};k.hf=function(){return this.ad.eb()};function nb(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].f==b)return c;return-1}function ib(a){var b=[],c;for(c in a)b.push(c);return b}k.kb=function(a){this.F=new R(this,a);this.I=!0};k.$=function(a,b,c){return this.jb.$(a,b,c)};function ob(a){return a.jb.Na.se}k.Db=function(){return this.F.ja()};k.Ya=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.Ia(b,a[b])};
k.$e=function(a,b){if(!pb(ob(this))){var c=qb(this).Sl(a[0],a[1],b[0],b[1]),c=c.Yl-c.Zl;isNaN(c)&&(c=0);return c}return 0};
k.Ia=function(a,b){switch(a){case "map":this.j.c=q.ni(b);break;case "mapCache":this.j.yf=q.$a(b,10,900);break;case "mapGPUCache":this.j.Bf=q.$a(b,10,360);break;case "mapMetatileCache":this.j.Ef=q.$a(b,10,60);break;case "mapTexelSizeFit":this.j.Ff=q.$a(b,1E-4,1.1);break;case "mapTexelSizeTolerance":this.j.Gf=q.$a(b,1E-4,2.2);break;case "mapDownloadThreads":this.j.zf=q.$a(b,1,6);break;case "mapMeshProcessingFactor":this.j.pk=q.$a(b,1,1);break;case "mapTextureProcessingFactor":this.j.rk=q.$a(b,1,1);
break;case "mapMetatileProcessingFactor":this.j.qk=q.$a(b,1,2);break;case "mapMobileMode":this.j.uh=q.Qb(b,!1);break;case "mapMobileTexelDegradation":this.j.vh=q.$a(b,1,2);break;case "mapNavSamplesPerViewExtent":this.j.Jb=q.$a(b,1,10);break;case "mapFog":this.j.Af=q.Qb(b,!1);break;case "mapIgnoreNavtiles":this.j.Cf=q.Qb(b,!1);break;case "mapAllowHires":this.j.wf=q.Qb(b,!0);break;case "mapAllowLowres":this.j.xf=q.Qb(b,!0);break;case "mapAllowSmartSwitching":this.j.th=q.Qb(b,!0)}};
k.cb=function(a){switch(a){case "map":return this.j.c;case "mapCache":return this.j.yf;case "mapGPUCache":return this.j.Bf;case "mapMetatileCache":return this.j.Ef;case "mapTexelSizeFit":return this.j.Ff;case "mapTexelSizeTolerance":return this.j.Gf;case "mapDownloadThreads":return this.j.zf;case "mapMeshProcessingFactor":return this.j.pk;case "mapTexturesProcessingFactor":return this.j.rk;case "mapMetatileProcessingFactor":return this.j.qk;case "mapMobileMode":return this.j.uh;case "mapMobileTexelDegradation":return this.j.vh;
case "mapNavSamplesPerViewExtent":return this.j.Jb;case "mapFog":return this.j.Af;case "mapIgnoreNavtiles":return this.j.Cf;case "mapAllowHires":return this.j.wf;case "mapAllowLowres":return this.j.xf;case "mapAllowSmartSwitching":return this.j.th}};
k.ej=function(){ka(this.o.g);this.Ge={rf:[],wh:[]};q.e.create();this.F.check();this.Ec=rb(this.F);this.Ec=q.Fc(this.Ec,0.1,this.l.Xb);var a=this.F.h[4];if("float"==this.F.h[3]){var b=sb(this,T(this.F),tb(this.F),this.j.Jb),b=this.qb(T(this.F),b,!0);this.G.Sj=b[0];this.G.Rj=a;a+=b[0]}b=this.F.ae(pb(ob(this)));this.l.kb(b.Oa);var c=this.l,d=b.bg;c.cg=!0;c.Hd=d.slice();c.I=!0;this.o.Ec=b.Ub;this.Bg=b.oi;c=this.l;c.ri=tb(this.F);c.I=!0;a=this.$([T(this.F)[0],T(this.F)[1],a],"navigation","physical");a[0]+=
b.Oa[0];a[1]+=b.Oa[1];a[2]+=b.Oa[2];this.l.kb([0,0,0]);this.Ne=a;a=this.Ec/6E5;b=Math.max(2,40*a);a=Math.max(1,a);c=this.l;c.Ye=this.l.Cb();c.vd=b;c.Xb=6E6*a;c.I=!0;this.o.I=!0;this.o.We=this.We;Oa(this.o);this.Ea()};
k.update=function(){if(!0!=this.U&&(null==this.zb||"hidden"!=this.zb.style.visibility)){var a=this.F,b=this.qh,b=b.h;a.h[0]==b[0]&&q.isEqual(a.h[1],b[1],1E-7)&&q.isEqual(a.h[2],b[2],1E-7)&&a.h[3]==b[3]&&q.isEqual(a.h[4],b[4],0.001)&&q.isEqual(a.h[5],b[5],0.001)&&q.isEqual(a.h[6],b[6],0.001)&&q.isEqual(a.h[7],b[7],0.001)&&q.isEqual(a.h[8],b[8],0.001)&&q.isEqual(a.h[9],b[9],0.001)||this.s.yb("map-position-changed",{position:this.F.h.slice()});this.qh=this.F.ja();a=this.o.zb.getBoundingClientRect();
if(this.o.fa[0]!=a.width||this.o.fa[1]!=a.height)this.o.Bh(),this.I=!0;a=this.I;b=this.G;a&&(b.Og=0,b.$d=0);b.Rh++;b.Ih=performance.now();this.vf||this.Ib.update();if(this.I){this.I=!1;ka(this.o.g);for(var b=0,c=this.pa.length;b<c;b++){var d=this.pa[b];d.Xe&&d.vg&&d.vg()}this.s.yb("map-update",{})}this.G.end(a)}};
q.tj=function(){function a(a,c,d,e){var g=y(c.style,a,e),f=s(g,"visible",c,d),h=s(g,"z-index",c,d);if(!1!=f){var l={},n;for(n in c)"points"!=n&&"d-points"!=n&&(l[n]=c[n]);f=s(g,"hover-style",c,d);f=""!=f?y(f,a,e):null;null!=f?(S=1,b(a,c,d,g,h,l),S=2,b(a,c,d,f,h,l)):(S=0,b(a,c,d,g,h,l));n=s(g,"multi-pass",c,d);if(null!=n)for(var p=0,m=n.length;p<m;p++)h=n[p][0],g=y(n[p][1],a,e),f=s(g,"visible",c,d),!1!=f&&(f=s(g,"hover-style",c,d),f=""!=f?y(f,a,e):null,null!=f?(S=1,b(a,c,d,g,h,l),S=2,b(a,c,d,f,h,l)):
(S=0,b(a,c,d,g,h,l)))}}function b(a,b,c,d,e,g){switch(a){case "line-string":(s(d,"point",b,c)||s(d,"label",b,c))&&f(b,c,d,e,g);l(b,c,d,e,g);break;case "point-array":f(b,c,d,e,g),(s(d,"line",b,c)||s(d,"line-label",b,c))&&l(b,c,d,e,g)}}function c(a,b){for(var c=0,d=[0,0,0],e=[1,0,0],g=0,f=a.length-1;g<f;g++){var d=a[g],e=a[g+1],e=[e[0]-d[0],e[1]-d[1],e[2]-d[2]],h=vec3Length(e);if(c+h>b){c=(b-c)/h;d=[d[0]+e[0]*c,d[1]+e[1]*c,d[2]+e[2]*c];vec3Normalize(e);break}c+=h}return[d,e]}function d(a,b,c){var d=
0;c=c.Td;for(var e=0,g=a.length;e<g;e++){var f=a.charCodeAt(e);10!=f&&(9==f&&(f=32),f=c[f],null!=f&&(d+=f.Tc*b))}return d}function e(a,b,e,g,f,l,n){var p=e/g.m,m=d(b,p,g),r,s=0;r=0;for(var w=a.length-1;r<w;r++)var y=a[r],A=a[r+1],s=s+vec3Length([A[0]-y[0],A[1]-y[1],A[2]-y[2]]);r=s;s=0.5*(r-m);0>s&&(s=0);if(!(m>r)){a:{m=s;r=0;for(var y=[0,0,0],y=[1,0,0],w=[0,0,0],p=m+d(b,p,g),A=0,C=a.length-1;A<C;A++){var y=a[A],D=a[A+1],y=[D[0]-y[0],D[1]-y[1],D[2]-y[2]];r+=vec3Length(y);r>m&&(vec3Normalize(y),w[0]+=
y[0],w[1]+=y[1],w[2]+=y[2]);if(r>p){vec3Normalize(w);p=[-w[1],w[0],0];break a}}p=w}null==p&&(p=[0,1]);A=a[0];m=l.length;w=n.length;r=g.Td;e/=g.m;y=g.eg*e;A=[A[0],A[1],A[2]];C=0;for(D=b.length;C<D;C++){var F=b.charCodeAt(C);if(10==F)A[0]+=-G[1]*y,A[1]+=G[0]*y;else{9==F&&(F=32);var G=r[F],L=1;null!=G&&(L=G.Tc*e);var K=c(a,s),G=c(a,s+L),G=[0.5*(G[1][0]+K[1][0]),0.5*(G[1][1]+K[1][1]),0.5*(G[1][2]+K[1][2])];vec3Normalize(G);w=h(K[0],G,-e*g.m*0.7+f,F,e,m,w,p,g,l,n);m=w[1];w=w[2];s+=L}}}}function h(a,b,
c,d,e,g,f,h,l,n,p){var m=[-b[1],b[0],0];a=[a[0],a[1],a[2]];var r=[a[0],a[1],a[2]],s=l.Td;l=s[d];var w=0,y=h[0];h=h[1];9==d||32==d?(l=s[32],null!=l&&(a[0]+=b[0]*l.Tc*e,a[1]+=b[1]*l.Tc*e,w=l.sh*e)):null!=l&&(d=l.sh*e,s=l.wm*e,c=[m[0]*c,m[1]*c,m[2]*c],m=[c[0]+m[0]*s,c[1]+m[1]*s,c[2]+m[2]*s],r[0]=a[0]+b[0]*d,r[1]=a[1]+b[1]*d,r[2]=a[2]+b[2]*d,n[g]=a[0]-c[0],n[g+1]=a[1]-c[1],n[g+2]=a[2]-c[2],p[f]=l.hi,p[f+1]=l.li,p[f+2]=y,p[f+3]=h,n[g+3]=a[0]-m[0],n[g+4]=a[1]-m[1],n[g+5]=a[2]-m[2],p[f+4]=l.hi,p[f+5]=l.mi,
p[f+6]=y,p[f+7]=h,n[g+6]=r[0]-c[0],n[g+7]=r[1]-c[1],n[g+8]=r[2]-c[2],p[f+8]=l.ii,p[f+9]=l.li,p[f+10]=y,p[f+11]=h,n[g+9]=a[0]-m[0],n[g+10]=a[1]-m[1],n[g+11]=a[2]-m[2],p[f+12]=l.hi,p[f+13]=l.mi,p[f+14]=y,p[f+15]=h,n[g+12]=r[0]-m[0],n[g+13]=r[1]-m[1],n[g+14]=r[2]-m[2],p[f+16]=l.ii,p[f+17]=l.mi,p[f+18]=y,p[f+19]=h,n[g+15]=r[0]-c[0],n[g+16]=r[1]-c[1],n[g+17]=r[2]-c[2],p[f+20]=l.ii,p[f+21]=l.li,p[f+22]=y,p[f+23]=h,g+=18,f+=24,a[0]+=b[0]*l.Tc*e,a[1]+=b[1]*l.Tc*e,w=l.sh*e);return[a,g,f,w]}function g(a,b,
c){switch(a){case "top-left":return[0,0];case "top-right":return[-b,0];case "top-center":return[0.5*-b,0];case "center-left":return[0,0.5*-c];case "center-right":return[-b,0.5*-c];case "center-center":return[0.5*-b,0.5*-c];case "bottom-left":return[0,-c];case "bottom-right":return[-b,-c];case "bottom-center":return[0.5*-b,-c]}}function f(a,b,c,e,f){var l=a.points||[];if(0!=l.length){var n=s(c,"visibility",a,b),p=s(c,"hover-event",a,b),m=s(c,"click-event",a,b),r=s(c,"draw-event",a,b),w=s(c,"enter-event",
a,b),y=s(c,"leave-event",a,b),A=s(c,"zbuffer-offset",a,b),Zb=s(c,"point",a,b),Jb=s(c,"point-flat",a,b),V=s(c,"point-color",a,b),ia=0.5*s(c,"point-radius",a,b),Aa=s(c,"icon",a,b);if(!0==Aa)var qa={Ud:s(c,"icon-color",a,b),Mh:s(c,"icon-scale",a,b),wd:s(c,"icon-offset",a,b),Pf:s(c,"icon-origin",a,b),Sc:s(c,"icon-source",a,b),C:[],zd:[],Ld:[]};var fb=s(c,"label",a,b);if(!0==fb)var oa={Ud:s(c,"label-color",a,b),m:s(c,"label-size",a,b),wd:s(c,"label-offset",a,b),Pf:s(c,"label-origin",a,b),Bi:s(c,"label-align",
a,b),Sc:s(c,"label-source",a,b),Ac:s(c,"label-width",a,b),C:[],zd:[],Ld:[]};b=a=0;c=[];var la;la=4*ia;8>la&&(la=8);32<la&&(la=32);for(var u=0,z=2*Math.PI/la,Z=0;Z<la;Z++)c[Z]=[-Math.sin(u),Math.cos(u)],u+=z;c[la]=[0,1];var Z=l[0],I=[Z[0],Z[1],Z[2]],u=[0,0,0],z=Array(9*l.length*la);if(!1==Jb)var x=Array(12*l.length*la);for(var Z=0,ha=l.length;Z<ha;Z++){!0==L&&(I=[I[0]-D,I[1]-G,I[2]]);null!=forceScale_&&(I=[I[0]*forceScale_[0],I[1]*forceScale_[1],I[2]*forceScale_[2]]);u[0]+=I[0];u[1]+=I[1];u[2]+=I[2];
for(var O=0;O<la;O++){if(!0==Aa){var da=I,Y=qa,t=Y.Sc;if(null!=t){var B=Math.abs(t[3]*Y.Mh),M=Math.abs(t[4]*Y.Mh),J=Y.C,N=Y.Ld,ea=Y.zd,ba=J.length;J.push(0,0,0,B,0,0,B,-M,0);N.push(t[1],t[2],0,0,t[1]+t[3],t[2],0,0,t[1]+t[3],t[2]+t[4],0,0);J.push(0,0,0,0,-M,0,B,-M,0);N.push(t[1],t[2],0,0,t[1],t[2]+t[4],0,0,t[1]+t[3],t[2]+t[4],0,0);t=g(Y.Pf,B,M);t[0]+=Y.wd[0];t[1]+=Y.wd[1];Y=ba;for(ba=J.length;Y<ba;Y+=3)ea.push(da[0],da[1],da[2]),J[Y]+=t[0],J[Y+1]-=t[1]}}if(!0==fb&&(da=I,J=oa,!(null==J.Sc||""==J.Sc||
1E-4>Math.abs(J.m)))){for(var ea=J.C,t=J.Ld,Y=J.zd,ba=ea.length,$=J.Sc.match(/[^\r\n]+/g),B=[],M=0,N=$.length;M<N;M++){var H=$[M];do{var va;a:{va=0;for(var La=K["default"].Td,Ha=0,Ia=H.length;Ha<Ia;Ha++){var ma=H.charCodeAt(Ha);if(va>J.Ac&&(10==ma||9==ma||32==ma)){va=Ha;break a}10!=ma&&(9==ma&&(ma=32),ma=La[ma],null!=ma&&(va+=J.m/K["default"].m*ma.Tc))}va=Ia}if(H.length==va){B.push(H);break}B.push(H.substring(0,va));H=H.substring(va+1)}while(1)}H=$=0;M=K["default"];va=J.m/M.m*M.eg;La=0;Ha=[];M=0;
for(N=B.length;M<N;M++)Ha[M]=d(B[M],J.m/K["default"].m,K["default"]),La=Math.max(Ha[M],La);M=0;for(N=B.length;M<N;M++){Ia=Ha[M];switch(J.Bi){case "left":$=0;break;case "right":$=La-Ia;break;case "center":$=0.5*(La-Ia)}for(var Ba=[$,H,0],Ia=B[M],ma=K["default"],$b=ea,ac=t,Kb=[1,0,0],yc=[0,1],bc=$b.length,Ta=ac.length,cc=J.m/ma.m,dc=ma.eg*cc,Ma=[Ba[0],Ba[1],Ba[2]],Ba=[Ba[0],Ba[1],Ba[2]],Lb=0,zc=Ia.length;Lb<zc;Lb++){var ec=Ia.charCodeAt(Lb);10==ec?(Ma[0]+=-Kb[1]*dc,Ma[1]+=Kb[0]*dc,Ba=[Ma[0],Ma[1],Ma[2]]):
(Ta=h(Ba,Kb,0,ec,cc,bc,Ta,yc,ma,$b,ac),Ba=Ta[0],bc=Ta[1],Ta=Ta[2])}H-=va}t=g(J.Pf,La,-H);t[0]+=J.wd[0];t[1]+=J.wd[1];M=ba;for(N=ea.length;M<N;M+=3)Y.push(da[0],da[1],da[2]),ea[M]+=t[0],ea[M+1]-=t[1]}!0==Zb&&(!0==Jb?(z[a]=I[0],z[a+1]=I[1],z[a+2]=I[2],z[a+3]=I[0]+c[O][0]*ia,z[a+4]=I[1]+c[O][1]*ia,z[a+5]=I[2],z[a+6]=I[0]+c[O+1][0]*ia,z[a+7]=I[1]+c[O+1][1]*ia,z[a+8]=I[2]):(z[a]=I[0],z[a+1]=I[1],z[a+2]=I[2],x[b]=0,x[b+1]=0,x[b+2]=0,x[b+3]=0,z[a+3]=I[0],z[a+4]=I[1],z[a+5]=I[2],x[b+4]=c[O][0]*ia,x[b+5]=
c[O][1]*ia,x[b+6]=0,x[b+7]=0,z[a+6]=I[0],z[a+7]=I[1],z[a+8]=I[2],x[b+8]=c[O+1][0]*ia,x[b+9]=c[O+1][1]*ia,x[b+10]=0,x[b+11]=0,b+=12),a+=9)}I=l[Z+1]}0<ha&&(u[0]/=ha,u[1]/=ha,u[2]/=ha);u[0]+=W[0];u[1]+=W[1];u[2]+=W[2];l=p||m||w||y;!0==Zb&&(!0==Jb?postMessage({command:"addRenderJob",type:"flat-line",vertexBuffer:z,color:V,"z-index":e,visibility:n,center:u,"hover-event":p,"click-event":m,"draw-event":r,"enter-event":w,"leave-event":y,"zbuffer-offset":A,hitable:l,state:S,eventInfo:f,lod:X?null:C}):postMessage({command:"addRenderJob",
type:"pixel-line",vertexBuffer:z,normalBuffer:x,color:V,"z-index":e,visibility:n,center:u,"hover-event":p,"click-event":m,"draw-event":r,"enter-event":w,"leave-event":y,"zbuffer-offset":A,hitable:l,state:S,eventInfo:f,lod:X?null:C}));!0==Aa&&0<qa.C.length&&postMessage({command:"addRenderJob",type:"icon",vertexBuffer:qa.C,originBuffer:qa.zd,texcoordsBuffer:qa.Ld,icon:F[qa.Sc[0]],color:qa.Ud,"z-index":e,visibility:n,center:u,"hover-event":p,"click-event":m,"draw-event":r,"enter-event":w,"leave-event":y,
"zbuffer-offset":A,hitable:l,state:S,eventInfo:f,lod:X?null:C});!0==fb&&0<oa.C.length&&postMessage({command:"addRenderJob",type:"label",vertexBuffer:oa.C,originBuffer:oa.zd,texcoordsBuffer:oa.Ld,color:oa.Ud,"z-index":e,visibility:n,center:u,"hover-event":p,"click-event":m,"draw-event":r,"enter-event":w,"leave-event":y,"zbuffer-offset":A,hitable:l,state:S,eventInfo:f,lod:X?null:C})}}function l(a,b,c,d,g){var f,h=a.points||[];if(0!=h.length&&!1!=s(c,"line",a,b)){var l=s(c,"hover-event",a,b),n=s(c,"click-event",
a,b),p=s(c,"draw-event",a,b),m=s(c,"enter-event",a,b),r=s(c,"leave-event",a,b),w=s(c,"zbuffer-offset",a,b),y=s(c,"line-flat",a,b),A=s(c,"line-color",a,b),V=0.5*s(c,"line-width",a,b);f=s(c,"line-style",a,b);var ia=s(c,"line-style-texture",a,b),Aa=s(c,"line-style-background",a,b),qa=s(c,"line-label",a,b),fb=s(c,"line-label-size",a,b);if(!0==qa)var oa=Array(h.length),la=Array(h.length);for(var u=0,z=0,Z=[],I=[],x=0,ha=2*Math.PI/8,O=0;8>O;O++)Z[O]=[-Math.sin(x),Math.cos(x)],I[O]=x,x+=ha;Z[8]=[0,1];I[8]=
0;var da=h[0],x=[da[0],da[1],da[2]],ha="solid"!=f,Y=6*(ha||!y?4:3),t=Array(h.length*Y+24*h.length*(ha||!y?4:3));if(!1==y||!0==ha)var B=Array(24*h.length+96*h.length);if(!0==ha)var M=Array(h.length);for(var J=0.001,N=0.001,O=0,ea=h.length-1;O<ea;O++){x=h[O];f=h[O+1];!0==L&&(x=[x[0]-D,x[1]-G,x[2]],f=[f[0]-D,f[1]-G,f[2]]);null!=forceScale_&&(x=[x[0]*forceScale_[0],x[1]*forceScale_[1],x[2]*forceScale_[2]],f=[f[0]*forceScale_[0],f[1]*forceScale_[1],f[2]*forceScale_[2]]);if(!0!=y||ha)ba=[f[0]-x[0],f[1]-
x[1],0],$=Math.sqrt(ba[0]*ba[0]+ba[1]*ba[1]),N+=$,!0==y?($=0!=$?V/$:0,H=[-ba[1]*$,ba[0]*$,0],null!=M&&(M[O]=0!=$?Math.atan2(ba[0],ba[1])+0.5*Math.PI:0),t[u]=x[0],t[u+1]=x[1],t[u+2]=x[2],t[u+3]=J,B[z]=H[0],B[z+1]=H[1],B[z+2]=0,B[z+3]=V,t[u+4]=x[0],t[u+5]=x[1],t[u+6]=x[2],t[u+7]=-J,B[z+4]=-H[0],B[z+5]=-H[1],B[z+6]=0,B[z+7]=-V,t[u+8]=f[0],t[u+9]=f[1],t[u+10]=f[2],t[u+11]=N,B[z+8]=H[0],B[z+9]=H[1],B[z+10]=0,B[z+11]=V,t[u+12]=x[0],t[u+13]=x[1],t[u+14]=x[2],t[u+15]=-J,B[z+12]=-H[0],B[z+13]=-H[1],B[z+14]=
0,B[z+15]=-V,t[u+16]=f[0],t[u+17]=f[1],t[u+18]=f[2],t[u+19]=-N,B[z+16]=-H[0],B[z+17]=-H[1],B[z+18]=0,B[z+19]=-V,t[u+20]=f[0],t[u+21]=f[1],t[u+22]=f[2],t[u+23]=N,B[z+20]=H[0],B[z+21]=H[1],B[z+22]=0,B[z+23]=V):(t[u]=x[0],t[u+1]=x[1],t[u+2]=x[2],t[u+3]=J,B[z]=f[0],B[z+1]=f[1],B[z+2]=f[2],B[z+3]=V,t[u+4]=x[0],t[u+5]=x[1],t[u+6]=x[2],t[u+7]=-J,B[z+4]=f[0],B[z+5]=f[1],B[z+6]=f[2],B[z+7]=-V,t[u+8]=f[0],t[u+9]=f[1],t[u+10]=f[2],t[u+11]=-N,B[z+8]=x[0],B[z+9]=x[1],B[z+10]=x[2],B[z+11]=V,t[u+12]=x[0],t[u+13]=
x[1],t[u+14]=x[2],t[u+15]=J,B[z+12]=f[0],B[z+13]=f[1],B[z+14]=f[2],B[z+15]=V,t[u+16]=f[0],t[u+17]=f[1],t[u+18]=f[2],t[u+19]=-N,B[z+16]=x[0],B[z+17]=x[1],B[z+18]=x[2],B[z+19]=V,t[u+20]=f[0],t[u+21]=f[1],t[u+22]=f[2],t[u+23]=N,B[z+20]=x[0],B[z+21]=x[1],B[z+22]=x[2],B[z+23]=-V),u+=24,z+=24;else{var ba=[f[0]-x[0],f[1]-x[1],0],$=Math.sqrt(ba[0]*ba[0]+ba[1]*ba[1]),N=N+$,$=0!=$?V/$:0,H=[-ba[1]*$,ba[0]*$,0];t[u]=x[0]+H[0];t[u+1]=x[1]+H[1];t[u+2]=x[2];t[u+3]=x[0]-H[0];t[u+4]=x[1]-H[1];t[u+5]=x[2];t[u+6]=f[0]+
H[0];t[u+7]=f[1]+H[1];t[u+8]=f[2];t[u+9]=x[0]-H[0];t[u+10]=x[1]-H[1];t[u+11]=x[2];t[u+12]=f[0]-H[0];t[u+13]=f[1]-H[1];t[u+14]=f[2];t[u+15]=f[0]+H[0];t[u+16]=f[1]+H[1];t[u+17]=f[2];u+=18}J=N}x=[da[0],da[1],da[2]];f=[0,0,0];O=0;for(ea=h.length;O<ea;O++){!0==L&&(x=[x[0]-D,x[1]-G,x[2]]);null!=forceScale_&&(x=[x[0]*forceScale_[0],x[1]*forceScale_[1],x[2]*forceScale_[2]]);f[0]+=x[0];f[1]+=x[1];f[2]+=x[2];da=null!=M?M[O]:0;for(N=0;8>N;N++)!0!=y||ha?(J=O!=ea-1?t[O*Y+3]:t[(O-1)*Y+11],t[u]=x[0],t[u+1]=x[1],
t[u+2]=x[2],t[u+3]=J,B[z]=0,B[z+1]=0,B[z+2]=0,B[z+3]=0,t[u+4]=x[0],t[u+5]=x[1],t[u+6]=x[2],t[u+7]=J,B[z+4]=Z[N][0]*V,B[z+5]=Z[N][1]*V,B[z+6]=I[N]+da,B[z+7]=0,t[u+8]=x[0],t[u+9]=x[1],t[u+10]=x[2],t[u+11]=J,B[z+8]=Z[N+1][0]*V,B[z+9]=Z[N+1][1]*V,B[z+10]=I[N+1]+da,B[z+11]=0,u+=12,z+=12):(t[u]=x[0],t[u+1]=x[1],t[u+2]=x[2],t[u+3]=x[0]+Z[N][0]*V,t[u+4]=x[1]+Z[N][1]*V,t[u+5]=x[2],t[u+6]=x[0]+Z[N+1][0]*V,t[u+7]=x[1]+Z[N+1][1]*V,t[u+8]=x[2],u+=9);!0==qa&&(da=[x[0],x[1],x[2]+0.1*fb],oa[O]=da,la[ea-O-1]=da);
x=h[O+1]}0<ea&&(f[0]/=ea,f[1]/=ea,f[2]/=ea);f[0]+=W[0];f[1]+=W[1];f[2]+=W[2];h={command:"addRenderJob",vertexBuffer:t,color:A,"z-index":d,center:f,normalBuffer:B,"hover-event":l,"click-event":n,"draw-event":p,hitable:l||n||m||r,state:S,eventInfo:g,"enter-event":m,"leave-event":r,"zbuffer-offset":w,"line-width":2*V,lod:X?null:C};h.type=!0==y?!0==ha?"flat-tline":"flat-line":!0==ha?"pixel-tline":"pixel-line";!0==ha&&null!=ia&&(h.texture=[F[ia[0]],ia[1],ia[2]],h.background=Aa);postMessage(h);qa=s(c,"line-label",
a,b);!0==qa&&(y=oa,ia=s(c,"line-label-color",a,b),Aa=s(c,"line-label-source",a,b),oa=s(c,"line-label-size",a,b),h=s(c,"line-label-offset",a,b),null==Aa||""==Aa||1E-4>Math.abs(oa)||(l=s(c,"hover-event",a,b),n=s(c,"click-event",a,b),p=s(c,"draw-event",a,b),m=s(c,"enter-event",a,b),r=s(c,"leave-event",a,b),a=s(c,"zbuffer-offset",a,b),b=[],c=[],w=l||n||m||r,e(y,Aa,oa,K["default"],h,b,c),e(la,Aa,oa,K["default"],h,b,c),postMessage({command:"addRenderJob",type:"line-label",vertexBuffer:b,texcoordsBuffer:c,
color:ia,"z-index":d,center:f,"hover-event":l,"click-event":n,"draw-event":p,"enter-event":m,"leave-event":r,"zbuffer-offset":a,hitable:w,state:S,eventInfo:g,lod:X?null:C})))}}function n(a){switch(a){case "inherit":return"";case "line":return!1;case "line-flat":return!1;case "line-width":return 1;case "line-color":return[255,255,255,255];case "line-style":return"solid";case "line-style-texture":return null;case "line-style-background":return[0,0,0,0];case "line-label":return!1;case "line-label-color":return[255,
255,255,255];case "line-label-source":return"name";case "line-label-size":return 1;case "line-label-offset":return 0;case "point":return!1;case "point-flat":return!1;case "point-radius":return 1;case "point-style":return"solid";case "point-color":return[255,255,255,255];case "icon":return!1;case "icon-source":return null;case "icon-scale":return 1;case "icon-offset":return[0,0];case "icon-origin":return"bottom-center";case "icon-color":return[255,255,255,255];case "label":return!1;case "label-color":return[255,
255,255,255];case "label-source":return"name";case "label-size":return 10;case "label-offset":return[0,0];case "label-origin":return"bottom-center";case "label-align":return"center";case "label-width":return 200;case "z-index":return 0;case "zbuffer-offset":return[1,1,1];case "hover-event":return!1;case "hover-style":return"";case "enter-event":return!1;case "leave-event":return!1;case "click-event":return!1;case "draw-event":return!1;case "visible":return!0;case "visibility":return 0;case "multi-pass":return null}}
function p(a,b,c){switch(b){case "inherit":return m(a,b,c,"string");case "line":return m(a,b,c,"boolean");case "line-flat":return m(a,b,c,"boolean");case "line-width":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "line-color":return m(a,b,c,"object",4,0,255);case "line-style":return m(a,b,c,"string");case "line-style-texture":return m(a,b,c,"object",3,-Number.MAX_VALUE,Number.MAX_VALUE);case "line-style-background":return m(a,b,c,"object",4,0,255);case "line-label":return m(a,b,c,"boolean");
case "line-label-source":return m(a,b,c,"string");case "line-label-color":return m(a,b,c,"object",4,0,255);case "line-label-size":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "line-label-offset":return m(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "point":return m(a,b,c,"boolean");case "point-flat":return m(a,b,c,"boolean");case "point-radius":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "point-style":return m(a,b,c,"string");case "point-color":return m(a,
b,c,"object",4,0,255);case "icon":return m(a,b,c,"boolean");case "icon-source":return m(a,b,c,"object",5,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-scale":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "icon-offset":return m(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-origin":return m(a,b,c,"string");case "icon-color":return m(a,b,c,"object",4,0,255);case "label":return m(a,b,c,"boolean");case "label-color":return m(a,b,c,"object",4,0,255);case "label-source":return m(a,
b,c,"string");case "label-size":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "label-offset":return m(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "label-origin":return m(a,b,c,"string");case "label-align":return m(a,b,c,"string");case "label-width":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "z-index":return m(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "zbuffer-offset":return m(a,b,c,"object",3,0,Number.MAX_VALUE);case "hover-event":return m(a,
b,c,"boolean");case "hover-style":return m(a,b,c,"string");case "enter-event":return m(a,b,c,"boolean");case "leave-event":return m(a,b,c,"boolean");case "click-event":return m(a,b,c,"boolean");case "draw-event":return m(a,b,c,"boolean");case "visible":return m(a,b,c,"boolean");case "visibility":return m(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "multi-pass":return m(a,b,c,"object")}return c}function m(a,b,c,d,e,f,g){if(null!=c&&"object"==typeof c&&(null!=c.discrete||null!=c.linear||null!=c["lod-scaled"])){e=
null;var h=!1;if(null!=c["lod-scaled"]){var l=c["lod-scaled"];if(!("object"==typeof l&&Array.isArray(l)&&2<=l.length))return r("wrong-property-value",a,b,c,null,"[]"),n(b);null==l[2]&&(l[2]=1);if("number"!=typeof l[0]||"number"!=typeof l[2])return r("wrong-property-value",a,b,c,null,"[]"),n(b);if("number"==typeof l[1])return c;e=l[1];h=!0}else e=c.discrete||c.linear;if(null==e||!("object"==typeof e&&Array.isArray(e)&&0<e.length))return r("wrong-property-value",a,b,c,null,"[]"),n(b);if(null!=e){var p=
null;d=0;for(l=e.length;d<l;d++){var m=e[d];if(null==m||"object"!=typeof m||!Array.isArray(m)||2==m.length)if(null==p&&(p=typeof m[1],!0==h&&"number"!=p)||"number"!=typeof m[0]||typeof m[1]!=p||"number"==p&&(m[1]>g||m[1]<f))return r("wrong-property-value[]",a,b,c,d,"[]"),n(b)}}return c}if(typeof c!=d&&(null!==c||"icon-source"!=b&&"visibility"!=b))return r("wrong-property-value",a,b,c),n(b);switch(typeof c){case "object":if(null===c&&("line-style-texture"==b||"icon-source"==b||"visibility"==b||"multi-pass"==
b))return c;if("multi-pass"==b)if(!0==Array.isArray(c)&&0<c.length)for(d=0;d<l;d++){if(f=c[d],"object"!=typeof f||!0!=Array.isArray(f)||2!=f.length||"number"!=typeof f[0]||"string"!=typeof f[1])return r("wrong-property-value[]",a,b,c,d),n(b)}else return r("wrong-property-value",a,b,c),n(b);if(null!=e)if(!0==Array.isArray(c)&&c.length==e){d=0;if("icon-source"==b||"line-style-texture"==b){if("string"!=typeof c[0])return r("wrong-property-value[]",a,b,c,0),n(b);if(null==F[c[0]])return r("wrong-object",
a,b,c,null,"bitmap"),n(b);d=1}for(l=c.length;d<l;d++)if("number"!=typeof c[d])return r("wrong-property-value[]",a,b,c,d),n(b)}else return r("wrong-property-value",a,b,c),n(b);return c;case "string":if("line-style"==b)switch(c){case "solid":case "texture":return c;default:return r("wrong-property-value",a,b,c),n(b)}if("label-origin"==b||"icon-origin"==b)switch(c){case "top-left":case "top-right":case "top-center":case "center-left":case "center-right":case "center-center":case "bottom-left":case "bottom-right":case "bottom-center":return c;
default:return r("wrong-property-value",a,b,c),n(b)}if("label-align"==b)switch(c){case "left":case "right":case "center":break;default:return r("wrong-property-value",a,b,c),n(b)}return c;case "number":return c>g||c<f?(r("wrong-property-value",a,b,c),n(b)):c;case "boolean":return c}}function r(a,b,c,d,e,f){"object"==typeof d&&(d=JSON.stringify(d));switch(a){case "wrong-property-value":console.log("Error: wrong style property "+(f?"'"+f+"'":"")+": "+b+"."+c+" = "+d);break;case "wrong-property-value[]":console.log("Error: wrong style property "+
(f?"'"+f+"'":"")+"["+e+"]: "+b+"."+c+" = "+d);break;case "wrong-object":console.log("Error: reffered "+f+" does not exist: "+b+"."+c+" = "+d);break;case "wrong-object[]":console.log("Error: reffered "+f+" does not exist: "+b+"."+c+"["+e+"] = "+d);break;case "wrong-style":console.log("Error: reffered "+f+" style does not exist: "+f+"["+e+"].style = "+b);break;case "wrong-bitmap":console.log("Error: wrong definition of bitmap: "+b);break;case "custom":console.log("Error: "+b)}}function w(a,b,c,d,e){if(100<
e)r("custom","infinite inherit loop in style: "+a);else if(null!=c.inherit){var f=d.styles[c.inherit];if(null!=f){null!=f.inherit&&w(c.inherit,b,f,d,e++);for(var g in f)b[g]=f[g]}else r("wrong-object",a,"inherit",f,"style")}}function s(a,b,c,d){var e=a[b];switch(typeof e){case "string":if(0<e.length&&"$"==e.charAt(0)){d=c[e.substr(1)];if(null!=d)return d;r("wrong-object",a["$$style-id"],b,e,null,"feature-property")}return e;case "object":if(null==e)break;if(!0==Array.isArray(e)){if("icon-source"==
b&&null==F[e[0]]){r("wrong-object",a["$$style-id"],b,e,null,"bitmap");break}return e}var f=null;a=null;if(null!=e["lod-scaled"]){a=e["lod-scaled"];if("number"==typeof a[1])return a[1]*Math.pow(2*a[2],a[0]-d);f=a[1]}else f=e.discrete||e.linear;b=f[0][0];c=f[0][1];for(var g=typeof c,h=c,l=0,p=f.length;l<=p;l++){if(l==p){h=c;break}if(f[l][0]>d){if(null!=e.discrete||null!=a)h=c;else{currentLod_=f[l][0];currentValue_=f[l][1];if(currentLod_==b)break;switch(g){case "boolean":currentValue_=(c=c?1:0)?1:0;
h=c+(d-b)/(currentLod_-b)*(currentValue_-c);h=0.5<h?!0:!1;break;case "number":h=c+(d-b)/(currentLod_-b)*(currentValue_-c);break;case "object":for(h=[],e=0,f=c.length;e<f;e++)h[e]=c[e]+(d-b)/(currentLod_-b)*(currentValue_[e]-c[e])}}break}b=f[l][0];c=f[l][1]}null!=a&&(h*=Math.pow(2*a[2],a[0]-d));return h;case "number":case "boolean":return e}return n(b)}function y(a,b,c){var d=A.Sh[a];return null==d?(r("wrong-style",a,null,null,c,b),{}):d}var A={},F={},L=!1,D=0,G=0,C=0,K={},S=0,W=[0,0,0],X=!1;vec3Normalize=
function(a){var b;b||(b=a);var c=a[0],d=a[1];a=a[2];var e=Math.sqrt(c*c+d*d+a*a);e?1==e?(b[0]=c,b[1]=d,b[2]=a):(e=1/e,b[0]=c*e,b[1]=d*e,b[2]=a*e):(b[0]=0,b[1]=0,b[2]=0)};vec3Length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};self.onmessage=function(b){var c=b.data;b=c.data;switch(c.command){case "setStyles":F={};var d=b.bitmaps||{},e;for(e in d)c=d[e],"string"==typeof c?c={url:c}:"object"==typeof c?null==c.url&&r("wrong-bitmap",e):r("wrong-bitmap",e),F[e]=c;postMessage({command:"loadBitmaps",
bitmaps:F});A={Sh:{}};d=b.styles||{};for(e in d){var c=A.Sh,f=e,g=e,h=d[e],l=b,m={};null!=h.inherit&&w(g,m,h,l,0);var s=void 0;for(s in h)m[s]=h[s];m["$$style-id"]=g;h=void 0;for(h in m)s=m[h],"string"==typeof s&&0<s.length&&"@"==s.charAt(0)&&(null!=l.constants?null!=l.constants[s]?m[h]=l.constants[s]:(r("wrong-object",g,h,s,null,"constant"),m[h]=n(h)):(r("wrong-object",g,h,s,null,"constant"),m[h]=n(h))),m[h]=p(g,h,m[h]);c[f]=m}postMessage("ready");break;case "setFont":K["default"]={Td:b.chars,eg:b.space,
m:b.size};postMessage("ready");break;case "processGeodata":D=c.x||0;G=c.y||0;C=c.lod||1;X=c.autoLod||!1;e=C;if("string"==typeof b)try{d=JSON.parse(b)}catch(y){d=null}else d=b;if(d)for(b=d.layers||d.groups||[],d=0,c=b.length;d<c;d++){m=b[d];f=e;h=m.points||[];null==m.origin&&0!=D&&0!=G?(m.origin=[D,G,0],L=!0):L=!1;W=m.origin;forceScale_=null!=m.scale?m.scale:null;postMessage({command:"beginGroup",id:m.id,bbox:m.bbox,origin:m.origin});g=0;for(l=h.length;g<l;g++)a("point-array",h[g],f,g);m=m.lines||
[];g=0;for(l=m.length;g<l;g++)a("line-string",m[g],f,g);postMessage({command:"endGroup"})}postMessage("allProcessed");postMessage("ready")}}};
q.Ze=function(a,b){this.sf=a;this.s=a.s;this.U=!1;this.me=b;this.Wf=!0;var c=window.URL||window.webkitURL,d,e=q.pl();try{d=new Blob([e],{type:"application/javascript"})}catch(h){window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.Vl,d=new BlobBuilder,d.append(e),d=blob.getBlob()}this.Tf=new Worker(c.createObjectURL(d));this.Tf.onmessage=this.Dk.bind(this)};q.Ze.prototype.n=function(){!0!=this.U&&(this.U=!0,null!=this.Tf&&this.Tf.terminate())};
q.Ze.prototype.T=function(){return this.Wf||this.U};q.Ze.prototype.Dk=function(a){!0!=this.U&&(a=a.data,"ready"==a&&(this.Wf=!0),null!=this.me&&this.me(a))};function gb(a,b){this.c=a;this.f=b.id||null;this.ca=b.type||"raster";this.De=b.url||"";this.zl=b.tileSize||[256,256];this.ta=b.lodRange||[0,0];this.p=b.credits||[];this.J=b.tileRange||[[0,0],[0,0]];this.Wd=[];for(var c=0,d=this.p.length;c<d;c++){var e=a.p[this.p[c]];e&&this.Wd.push(e.f)}}
gb.prototype.eb=function(){return{type:this.ca,url:this.De,tileSize:this.zl,credits:this.p,lodRange:this.ta,tileRange:this.J}};gb.prototype.fe=function(a){var b=a[0]-this.ta[0];if(0>b)return!1;var c=a[1]>>b,b=a[2]>>b;return a[0]<this.ta[0]||a[0]>this.ta[1]||c<this.J[0][0]||c>this.J[1][0]||b<this.J[0][1]||b>this.J[1][1]?!1:!0};function ub(a,b){return vb(a.c,a.De,{ua:b[0],Va:b[1],Wa:b[2]},null,void 0)}function Za(a,b){this.c=a;this.sk=null!=b?b:Number.MAX_VALUE;this.ra=this.Ca=null;this.mb=0}
function wb(a,b){if(null!=b&&a.ra!=b){null!=b.xa&&(b.xa.Ga=b.Ga);null!=b.Ga&&(b.Ga.xa=b.xa);a.Ca==b&&(a.Ca=b.xa);var c=a.ra;a.ra=b;a.ra.Ga=c;a.ra.xa=null;c.xa=a.ra}}k=Za.prototype;k.clear=function(){for(var a=this.ra;null!=a;)null!=a.Xd&&a.Xd(),a=a.Ga;this.ra=this.Ca=null;this.mb=0};function xb(a,b,c){b={Xd:b,Fg:c,xa:null,Ga:a.ra};null!=a.ra&&(a.ra.xa=b);a.ra=b;null==a.Ca&&(a.Ca=b);a.mb+=c;yb(a);return b}
k.remove=function(a){var b=!1;a==this.ra&&(this.ra=a.Ga,b=!0,null!=this.ra&&(this.ra.xa=null));a==this.Ca&&(this.Ca=a.xa,b=!0,null!=this.Ca&&(this.Ca.Ga=null));if(!b){if(a.xa)a.xa.Ga=a.Ga;else debugger;if(a.Ga)a.Ga.xa=a.xa;else debugger}this.mb-=a.Fg;a.Xd();yb(this)};function yb(a){for(;a.mb>a.sk;){var b=a.Ca;if(null!=b)a.Ca=a.Ca.xa,null!=a.Ca&&(a.Ca.Ga=null),a.mb-=b.Fg,b.Xd();else break}}k.zi=function(a,b){return xb(this,b,a)};k.removeItem=function(a){return this.remove(a)};
k.fk=function(a){return wb(this,a)};Za.prototype.addItem=Za.prototype.zi;Za.prototype.removeItem=Za.prototype.removeItem;Za.prototype.itemUsed=Za.prototype.fk;function R(a,b){this.c=a;b instanceof R?this.h=b.h.slice():(this.h=null!=b&&b instanceof Array?b.slice():[],this.yc())}k=R.prototype;k.ja=function(){return new R(this.c,this.h)};function T(a){return[a.h[1],a.h[2],a.h[4]]}function zb(a,b){a.h[1]=b[0];a.h[2]=b[1];a.h[4]=b[2];return a}function Ab(a,b){a.h[1]=b[0];a.h[2]=b[1]}
function Bb(a,b){a.h[4]=b;return a}k.La=function(){return[this.h[5],this.h[6],this.h[7]]};k.Rc=function(a){this.h[5]=a[0];this.h[6]=a[1];this.h[7]=a[2];return this};k.Cb=function(){return this.h[9]};function Cb(a,b){a.h[9]=b;return a}function tb(a){return a.h[8]}function Db(a,b){a.h[8]=b;return a}function rb(a){return tb(a)/Math.tan(q.ia(0.5*a.Cb()))}k.check=function(){this.h[6]=q.Fc(this.h[6],-90,90);this.h[5]%=360;this.h[7]%=360};
function Eb(a,b,c){var d=T(a),e=ob(a.c).Zb();pb(ob(a.c))?(b=q.ia(b),b=[-Math.sin(b),Math.cos(b)],Ab(a,[d[0]+b[0]*c,d[1]+b[1]*c])):(e=ob(a.c).Zb(),c=(new GeographicLib.Geodesic.Geodesic(e.a,e.a/e.b-1)).Direct(d[1],d[0],b,c),Ab(a,[c.lon2,c.lat2]),d=a.La(),d[0]+=c.azi1-c.azi2,a.Rc(d));return a}function Fb(a,b,c){if(a.h[3]==b)return a;var d=sb(a.c,T(a),tb(a),a.c.j.Jb),d=a.c.qb(T(a),d);if(!1==d[1]&&!c)return null;"float"==b?(a.h[3]=b,a.h[4]-=d[0]):"fix"==b&&(a.h[3]=b,a.h[4]+=d[0]);return a}
k.yc=function(){var a=this.h;"fixed"==a[0]&&(a[0]="obj",a[9]=a[8],a[8]=a[7],a[7]=a[6],a[6]=a[5],a[5]=a[4],a[4]=a[3],a[3]="fix");a[0]="obj"==a[0]||"subj"==a[0]?a[0]:"obj";a[1]=a[1]||0;a[2]=a[2]||0;a[3]="fix"==a[3]||"fixed"==a[3]||"float"==a[3]?a[3]:"float";a[4]=a[4]||0;a[5]=a[5]||0;a[6]=a[6]||0;a[7]=a[7]||0;a[8]=a[8]||300;a[9]=a[9]||90;a[3]="fixed"==a[3]?"fix":a[3]};
function Gb(a,b){var c=a.La(),d=q.e.create();q.e.multiply(q.Ha(2,q.ia(c[0])),q.Ha(0,q.ia(c[1])),d);if("obj"==a.h[0]){var c=T(a),e=0;"float"==a.h[3]&&(d=sb(a.c,T(a),tb(a),a.c.j.Jb),d=a.c.qb(T(a),d),e=d[0]);d=a.ae(pb(ob(a.c)));pb(ob(a.c))?(c[0]+=d.Oa[0],c[1]+=d.Oa[1],c[2]+=d.Oa[2]+e):(c=a.c.$([c[0],c[1],c[2]+e],"navigation","physical"),c[0]+=d.Oa[0],c[1]+=d.Oa[1],c[2]+=d.Oa[2],c=a.c.$(c,"physical","navigation"));"fix"!=b&&(d=sb(a.c,c,tb(a),a.c.j.Jb),d=a.c.qb(c,d),c[2]-=d[0]);return c}if(a.h[3]==b)return T(a);
d=sb(a.c,T(a),tb(a),a.c.j.Jb);d=a.c.qb(T(a),d);c=T(a);c[2]="fix"==b?c[2]+d[0]:c[2]-d[0];return c}k.ed=function(){var a=T(this);if("float"==this.h[3]){var b=sb(this.c,T(this),tb(this),this.c.j.Jb),b=this.c.qb(T(this),b);a[2]+=b[0]}a=this.c.$(a,"navigation","physical");b=this.c.Ne;a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return Pa(this.c.o,a,Va(this.c.l))};
function Hb(a){var b=a.ja();Fb(b,"fix");var c=T(b),b=a.c.$(c,"navigation","physical");a.c.$([0,0],"navigation","physical");a.c.$([-180,0],"navigation","physical");a.c.$([90,0],"navigation","physical");a.c.$([0,90],"navigation","physical");a.c.$([-90,0],"navigation","physical");a.c.$([0,-90],"navigation","physical");a.c.$([0,-100],"navigation","physical");if(pb(ob(a.c)))var d=a.c.$([c[0],c[1]+100,c[2]],"navigation","physical"),e=a.c.$([c[0]+100,c[1],c[2]],"navigation","physical");else{var h=qb(a.c),
e=h.Direct(c[1],c[0],0,-100),d=a.ja();Ab(d,[e.lon2,e.lat2]);d=a.c.$(T(d),"navigation","physical");e=h.Direct(c[1],c[0],90,100);c=a.ja();Ab(c,[e.lon2,e.lat2]);e=a.c.$(T(c),"navigation","physical")}a=[d[0]-b[0],d[1]-b[1],d[2]-b[2]];b=[e[0]-b[0],e[1]-b[1],e[2]-b[2]];d=[0,0,0];q.t.normalize(a);q.t.normalize(b);q.t.Gg(a,b,d);q.t.normalize(d);return{Pg:b,Mg:a,zh:d}}
k.ae=function(a){var b=this.La(),c=rb(this),d=q.e.create();q.e.multiply(q.Ha(2,q.ia(b[0])),q.Ha(0,q.ia(b[1])),d);if("obj"==this.h[0]){var e=[0,-c,0];q.e.ka(d,e)}else e=[0,0,0];c={Oa:null,Ub:c,bg:null,oi:null};if(a){d=q.e.create();q.e.multiply(q.Ha(0,q.ia(-b[1]-90)),q.Ha(2,q.ia(-b[0])),d);a=Hb(this);north_=a.zh;east_=a.Pg;direction_=a.Mg;b=[east_[0],east_[1],east_[2],0,direction_[0],direction_[1],direction_[2],0,north_[0],north_[1],north_[2],0,0,0,0,1];b=[1,0,0];a=[0,1,0];var h=[0,0,1],g=[1,0,0],f=
[0,0,-1],l=[0,0,0];q.t.Gg(g,f,l);q.e.ka(d,h);q.e.ka(d,b);q.e.ka(d,a);q.e.ka(d,g);q.e.ka(d,f);q.e.ka(d,l);d=0;d=g[0];g[0]=g[1];g[1]=d;d=f[0];f[0]=f[1];f[1]=d;d=l[0];l[0]=l[1];l[1]=d;g[2]=-g[2];f[2]=-f[2];l[2]=-l[2];d=[b[0],b[1],b[2],0,a[0],a[1],a[2],0,h[0],h[1],h[2],0,0,0,0,1];c.Oa=e;c.bg=d}else a=Hb(this),north_=a.zh,east_=a.Pg,direction_=a.Mg,d=q.e.create(),q.e.multiply(q.Ha(0,q.ia(-b[1]-90)),q.Ha(2,q.ia(-b[0])),d),b=[1,0,0],a=[0,1,0],h=[0,0,1],g=T(this),f=q.e.create(),q.e.multiply(q.Ha(0,q.ia(g[1]-
90)),q.Ha(2,q.ia(-g[0]-90)),f),q.e.ka(f,h),q.e.ka(f,b),q.e.ka(f,a),b=[b[0],b[1],b[2],0,a[0],a[1],a[2],0,h[0],h[1],h[2],0,0,0,0,1],l=[1,0,0],g=[0,1,0],f=[0,0,1],q.e.ka(b,g),q.e.ka(b,f),q.e.ka(b,l),q.e.ka(d,l),q.e.ka(d,g),q.e.ka(d,f),d=[l[0],l[1],l[2],0,g[0],g[1],g[2],0,f[0],f[1],f[2],0,0,0,0,1],b=q.e.inverse(b),q.e.ka(b,e),c.oi=[-b[8],-b[9],-b[10]];c.Oa=e;c.bg=d;return c};
k.toString=function(){var a=this.h;return a[0]+", "+a[1].toFixed(0)+", "+a[2].toFixed(0)+", "+a[3]+", "+a[4].toFixed(0)+", "+a[5].toFixed(0)+", "+a[6].toFixed(0)+", "+a[7].toFixed(0)+", , "+a[8].toFixed(0)+", "+a[9].toFixed(0)};function db(a,b){this.c=a;this.f=b.id||null;this.Ck=b.notice||null;this.Si=b.copyrighted||!0;this.De=b.url||null}db.prototype.eb=function(){return{id:this.f,notice:this.Ck,copyrighted:this.Si,url:this.De}};
Xa.prototype.Ea=function(){this.Mc=0.5*this.o.fa[0];var a=this.Db().La(),b=this.l.Xb,a=Math.log(0.05)/(10*b*(Math.max(5,-a[1])/90)),a=a*(5/(Math.min(5E4,Math.max(this.Ec,1E3))/5E3));!1==this.We&&(a=0);this.Hc=a;this.o.Hc=a;a=0;for(b=this.fc.length;a<b;a++)this.fc[a].Ea();a=0;for(b=this.ob.length;a<b;a++)this.ob[a].Ea()};function Ib(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];switch(e.ca){case "submesh":var h=e.gb,e=e.Y;if(!(h&&h.T(b)&&(!e||e&&e.T(b))))return!1}}return!0}
function Mb(a,b){for(var c in b.p)a.Ge.rf[c]=!0}
function Nb(a,b,c,d){for(var e=0,h=c.length;e<h;e++){var g=c[e];switch(g.ca){case "state":a.o.g.Mb(g.Id);break;case "submesh":var f=g.gb,l=g.Y;if(f&&f.T(d)&&(!l||l&&l.T(d)))a:{var n=b,p=g.uc,m=g.gc,g=g.Cc;null==f.Ua[p]&&null!=f.ya[p]&&(f.Ua[p]=Ob(f.ya[p]));var r=f.ya[p],p=f.Ua[p];if(null!=p){var w=f.c.o,s=null,y=null,A=null,F=f.c.jj;if(0<F)switch(F){case 2:s=w.Fh;break;case 3:s=w.Pk;break;case 1:switch(m){case "internal":case "internal-nofog":s=w.Gh;y="aTexCoord";break;case "external":case "external-nofog":s=
w.Uk;A="aTexCoord2";break;case "fog":break a}}else switch(m){case "internal":case "internal-nofog":s=w.Uf;y="aTexCoord";break;case "external":case "external-nofog":s=w.Tk;A="aTexCoord2";break;case "fog":s=w.Qk}w.g.useProgram(s,"aPosition",y,A,0!=F?"aBarycentric":null);var L=q.e.create();q.e.multiply(Qa(w.l),r.gd(n),L);n=Ra(w.l);ra(s,"uMV",L);ra(s,"uProj",n);if(0==F)switch(m){case "internal":case "fog":Da(s,"uFogDensity",f.c.Hc);break;case "internal-nofog":Da(s,"uFogDensity",0);break;case "external":Da(s,
"uAlpha",1);Da(s,"uFogDensity",f.c.Hc);break;case "external-nofog":Da(s,"uAlpha",g),Da(s,"uFogDensity",0)}if(null!=l&&null!=l.Fa)w.g.bindTexture(l.Fa);else if("fog"!=m)break a;p.Ea(s,"aPosition",y,A,0!=F?"aBarycentric":null);f.G.$d+=f.Wb}}}}}
function Pb(a,b,c,d,e,h,g){b.Yf=!1;if(null!=b.u){if(0!=(c.K&1)){if(null==b.ba){var f,l=b.u,n=b.f;f=vb(l.c,l.If,{ua:n[0],Va:n[1],Wa:n[2]},null,void 0);b.ba=new Qb(a,f)}if(a.Ng&&!h){l=b.ba;a.gj||c.cd(d);n=c.k.q;f=c.k.B;f=a.s.de().ed([n[0]+0.5*(f[0]-n[0])-d[0],n[1]+0.5*(f[1]-n[1])-d[1],f[2]-d[2]],Va(a.l));f[2]*=0.9992;var p=a.Wi;!0==a.dj&&(m=""+b.f[0],Wa(a.o,Math.round(f[0]-4*m.length*p*0.5),Math.round(f[1]-4*p),4*p,m,[255,0,0,255],f[2]));if(!0==a.fm){var m=""+b.f[1]+" "+b.f[2];Wa(a.o,Math.round(f[0]-
4*m.length*p*0.5),Math.round(f[1]-11*p),4*p,m,[0,255,255,255],f[2])}!0==a.hj&&(m=""+n[0].toFixed(1)+" "+n[1].toFixed(1)+" "+n[2].toFixed(1),Wa(a.o,Math.round(f[0]-4*m.length*p*0.5),Math.round(f[1]+3*p),4*p,m,[0,255,255,255],f[2]));!0==a.bj&&null!=l&&(m=""+l.Wb+" - "+l.ya.length+(b.u&&b.u.hd?" - 1":" - 0"),Wa(a.o,Math.round(f[0]-4*m.length*p*0.5),Math.round(f[1]+10*p),4*p,m,[0,255,0,255],f[2]));!0==a.aj&&(m=""+e[1].toFixed(2)+"  "+e[0].toFixed(2)+"  "+c.Cd.toFixed(2),Wa(a.o,Math.round(f[0]-4*m.length*
p*0.5),Math.round(f[1]+17*p),4*p,m,[255,0,255,255],f[2]))}a.G.Og++;if(0<b.v.length&&Ib(b.v,g))h||(Nb(a,d,b.v),Mb(a,b)),b.Ba=null;else{if(b.Ba)if(!0==b.ba.T(!0)){if(0<b.v.length){h||(Nb(a,d,b.Ba.v,!0),Mb(a,b));return}}else h||(Nb(a,d,b.Ba.v,!0),Mb(a,b));if(b.ba.T(g)&&!g){e=b.ba.ya;l=0;for(n=e.length;l<n;l++)if(f=e[l],a.Ng&&a.gj&&!h&&f.cd(d),f.Ab){if(b.Ce){b.Ce=!1;for(var m=a,p=b,r=e,w=0,s=r.length;w<s;w++){var y=r[w];if(y.Ab){var A=p.u;p.u.hd&&(A=p.u.vc[y.vc-1]);if(A){var F=p.xb[A.f];F||(F={Lb:[],
Cc:[],jg:!1,vb:0},p.xb[A.f]=F);if(F.vb!=p.vb){var L=m,D=p,G=y,y=F,F=F.vb!=p.vb;if(0<A.nb.length){if(F)for(y.Lb=[],G=0,F=A.nb.length;G<F;G++){var C=A.nb[G][0];if(C&&C.fe(D.f)&&0<A.nb[G][1]){y.Lb.push(C.f);y.Cc[C.f]=A.nb[G];D.la[C.f]=C;if(!D.Z[C.f]){var K=ub(C,D.f);D.Z[C.f]||(D.Z[C.f]=new Rb(L,K))}1>y.Cc[C.f][1]&&(y.jg=!0)}}}else if(null!=A.lb)F&&(C=L.la[A.lb])&&C.fe(D.f)&&(y.Lb.push(C.f),D.la[C.f]=C,D.Z[C.f]||(K=ub(C,D.f),D.Z[C.f]||(D.Z[C.f]=new Rb(L,K))));else if(0!=G.lb){a:{A=L.la;y=void 0;for(y in A)if(A[y].f==
G.lb){C=A[y];break a}C=null}C&&C.fe(D.f)&&(D.la[C.f]=C,D.Z[C.f]||(K=ub(C,D.f),D.Z[C.f]||(D.Z[C.f]=new Rb(L,K))))}}}}}m=void 0;for(m in p.xb)p.xb[m].vb=p.vb}p=b.u;p.hd&&(p=b.u.vc[f.vc-1]);if(null!=p&&(p=b.xb[p.f]))if(f.Ab)if(0<p.Lb.length)if(p.jg){if(f.Gb){null==b.ma[l]&&(f=Sb(b.u,b.f,l),b.ma[l]=new Rb(a,f));f=0;for(r=c.p.length;f<r;f++)b.p[c.p[f]]=!0;b.v.push({ca:"submesh",gb:b.ba,uc:l,Y:b.ma[l],gc:"internal-nofog"})}b.v.push({ca:"state",Id:a.Zi});w=p.Lb;s=0;for(L=w.length;s<L;s++)if(m=b.Z[w[s]]){D=
b.la[w[s]].Wd;f=0;for(r=D.length;f<r;f++)b.p[D[f]]=!0;b.v.push({ca:"submesh",gb:b.ba,uc:l,Y:m,gc:"external-nofog",Cc:p.Cc[w[s]][1]})}b.v.push({ca:"submesh",gb:b.ba,uc:l,Y:null,gc:"fog"});b.v.push({ca:"state",Id:a.ij})}else{if(f=p.Lb[p.Lb.length-1],m=b.Z[f]){D=b.la[f].Wd;f=0;for(r=D.length;f<r;f++)b.p[D[f]]=!0;b.v.push({ca:"submesh",gb:b.ba,uc:l,Y:m,gc:"external"})}}else if(f.lb){if(m=b.Z[f.lb]){if(b.la[f.lb])for(D=b.la[f.lb].Wd,f=0,r=D.length;f<r;f++)b.p[D[f]]=!0;b.v.push({ca:"submesh",gb:b.ba,uc:l,
Y:m,gc:"external"})}}else{if(f.Gb){null==b.ma[l]&&(f=Sb(b.u,b.f,l),b.ma[l]=new Rb(a,f));f=0;for(r=c.p.length;f<r;f++)b.p[c.p[f]]=!0;b.v.push({ca:"submesh",gb:b.ba,uc:l,Y:b.ma[l],gc:"internal"})}}else if(f.Gb)if(null==b.ma[l])f=Sb(b.u,b.f,l),b.ma[l]=new Rb(a,f);else{f=0;for(r=c.p.length;f<r;f++)b.p[c.p[f]]=!0;b.v.push({ca:"submesh",gb:b.ba,uc:l,Y:b.ma[l],gc:"internal"})}}Ib(b.v,g)?(h||(Nb(a,d,b.v),Mb(a,b)),b.Ba=null):b.Ba&&!h&&(Nb(a,d,b.Ba.v,!0),Mb(a,b))}}}}else!h&&b.Ba&&(Nb(a,d,b.Ba.v,!0),Mb(a,b))}
function U(a){this.c=a;this.j=a.j}k=U.prototype;k.kb=function(a){this.c.kb(a);return this};k.Db=function(){return this.c.Db().h};k.sc=function(a){this.c.sc(a);return this};k.hf=function(){return this.c.hf()};k.bf=function(){return this.c.bf()};k.wj=function(){var a=this.c,b=a.Ge.rf,c=[],d;for(d in b){var e=a.Qe[d];e&&c.push(e.lh)}e=a.Ge.wh;b=[];for(d in e)(e=a.Qe[d])&&b.push(e.lh);return{"3D":[],imagery:c,mapdata:b}};k.vj=function(a){return(a=this.c.p[a])?a.eb():{}};k.Nj=function(){return ib(this.c.ud)};
k.Mj=function(a){return(a=this.c.ud[a])?a.eb():{}};k.af=function(){return this.c.af()};k.Sg=function(a){return this.c.Sg(a)};k.be=function(){return this.c.be()};k.xj=function(a){return this.c.be(a)};k.gf=function(){return this.c.gf()};k.Lj=function(){return this.c.km(srsId_)};k.ff=function(){return this.c.ff(surfaceId_)};k.Zb=function(a){return(a=this.c.tc[a])?a.eb():{}};k.Kj=function(){return this.c.jb.eb()};
k.Ri=function(a,b){var c=new R(this.c,a);if(b!=c.h[0]){if("obj"==b){if("float"==c.h[3]){var d=!0;Fb(c,"fix",!0)}var e=rb(c),h=c.La(),g=q.ia(-h[1]),f=e*Math.sin(g),e=e*Math.cos(g);pb(ob(c.c))?(h=q.ia(h[0]),h=[-Math.sin(h),Math.cos(h)],g=T(c),g[0]+=h[0]*e,g[1]+=h[1]*e):(Eb(c,-h[0],e),g=T(c));g[2]-=f;zb(c,g);d&&Fb(c,"float",!0)}else"subj"==b&&(g=Gb(c,c.h[3]),zb(c,g));c.h[0]=b}return null!=c?c.h:c};k.Qi=function(a,b,c){a=Fb(new R(this.c,a),b,c);return null!=a?a.h:a};
k.$=function(a,b,c){a=this.c.tc[a];b=this.c.tc[b];return a&&b?Tb(b,c,a):null};k.Pi=function(a,b){return(new R(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90])).ed()};k.Ni=function(a){return(new R(this.c,a)).h};k.dl=function(a,b){return zb(new R(this.c,a),b).h};k.Dj=function(a){return T(new R(this.c,a))};k.fl=function(a,b){return Bb(new R(this.c,a),b).h};k.Fj=function(a){return(new R(this.c,a)).h[4]};k.gl=function(a,b){return(new R(this.c,a)).Rc(b).h};k.Hj=function(a){return(new R(this.c,a)).La()};
k.hl=function(a,b){return Db(new R(this.c,a),b).h};k.Ij=function(a){return tb(new R(this.c,a))};k.el=function(a,b){return Cb(new R(this.c,a),b)};k.Ej=function(a){return(new R(this.c,a)).Cb()};k.Jj=function(a){return(new R(this.c,a)).h[0]};k.Gj=function(a){return(new R(this.c,a)).h[3]};k.Cj=function(a){return(new R(this.c,a)).ed()};k.Bj=function(a,b){return Gb(new R(this.c,a),b)};k.xk=function(a,b,c){return Eb(new R(this.c,a),b,c)};k.qb=function(a,b){return this.c.qb(a,Ub(this.c,a,b))};
k.cf=function(a,b,c){return this.c.jm(a,b,c)};k.$e=function(a,b){return this.c.$e(a,b)};k.ae=function(){var a=this.c.l;return{"projection-matrix":a.Fd,"view-matrix":a.sd,"view-projection-matrix":a.td,position:a.Db(),vector:[0,0,1]}};
k.rj=function(a,b,c){a=new R(this.c,a);b=new R(this.c,b);a=new Vb(this.c,a,b,c);b=Array(Math.ceil(a.S/a.Kh)+1);for(var d=c=0;d<=a.S;d+=a.Kh){var e=d/a.S,h=a.Xa.ja();if("direct"==a.Lc){zb(h,Wb(a,e));var g=a.Xa.h[4];Bb(h,g+(a.ib.h[4]-g)*e);h.Rc(Xb(a.Xa.La(),a.ib.La(),e));Cb(h,Yb(a,e));Db(h,fc(a,e))}else{e=e*e*(3-2*e);e=e*e*(3-2*e);g=0;g=d<a.Aa?0:d>a.S-a.Aa?1:Math.min(1,(d-a.Aa)/(a.S-2*a.Aa));g=g*g*(3-2*g);factor2_=g*g*(3-2*g);zb(h,Wb(a,factor2_));g=T(a.Xa);Bb(h,g[2]+(T(a.ib)[2]-g[2])*e+Math.sin(Math.PI*
e)*a.Yb);var g=a,f=d,l=null,n=null,n=[0,-90,0],p=0;n[0]=g.Xc%360;0>n[0]&&(n[0]=360-Math.abs(n[0]));f<=g.Aa?(p=f/g.Aa,l=g.Xa.La()):f>=g.S-g.Aa?(p=(f-(g.S-g.Aa))/g.Aa,l=n,n=g.ib.La()):(p=0,l=n);h.Rc(Xb(l,n,p));Cb(h,Yb(a,e));Db(h,fc(a,e));b[c]=h.h}b[c]=h.h;c++}b[c]=a.Nc.ja().h;return b};E.prototype.Ya=function(a){this.c.Ya(a);return this};k=U.prototype;k.Ia=function(a,b){this.c.Ia(a,b);return this};k.cb=function(a){return this.c.cb(a,value_)};k.Xk=function(){this.c.I=!0;return this};
k.Qd=function(a,b,c){this.c.Qd(a,b,c);return this};k.Nf=function(a,b){this.c.Nf(a,b);return this};k.Mf=function(a,b){this.c.Mf(a,b);return this};k.Xf=function(a){this.c.Xf(a);return this};k.dg=function(a,b){this.c.dg(a,b);return this};k.ef=function(a){return this.c.ef(a)};k.cl=function(a){this.c.vf=a;return this};k.zj=function(){return this.c.vf};k.yj=function(){return this.c.Eb};q.Ul=R;U.prototype.setPosition=U.prototype.kb;U.prototype.getPosition=U.prototype.Db;U.prototype.setView=U.prototype.sc;
U.prototype.getView=U.prototype.hf;U.prototype.getCredits=U.prototype.bf;U.prototype.getCurrentCredits=U.prototype.wj;U.prototype.getCreditInfo=U.prototype.vj;U.prototype.getViews=U.prototype.Nj;U.prototype.getViewInfo=U.prototype.Mj;U.prototype.getBoundLayers=U.prototype.af;U.prototype.getBoundLayerInfo=U.prototype.Sg;U.prototype.getFreeLayers=U.prototype.be;U.prototype.getFreeLayerInfo=U.prototype.xj;U.prototype.getSurfaces=U.prototype.gf;U.prototype.getSurfaceInfo=U.prototype.Lj;
U.prototype.getSrses=U.prototype.ff;U.prototype.getSrsInfo=U.prototype.Zb;U.prototype.getReferenceFrame=U.prototype.Kj;U.prototype.convertPositionViewMode=U.prototype.Ri;U.prototype.convertPositionHeightMode=U.prototype.Qi;U.prototype.convertCoords=U.prototype.$;U.prototype.convertCoordsFromNavToCanvas=U.prototype.Pi;U.prototype.clonePosition=U.prototype.Ni;U.prototype.setPositionCoords=U.prototype.dl;U.prototype.getPositionCoords=U.prototype.Dj;U.prototype.setPositionHeight=U.prototype.fl;
U.prototype.getPositionHeight=U.prototype.Fj;U.prototype.setPositionOrientation=U.prototype.gl;U.prototype.getPositionOrientation=U.prototype.Hj;U.prototype.setPositionViewExtent=U.prototype.hl;U.prototype.getPositionViewExtent=U.prototype.Ij;U.prototype.setPositionFov=U.prototype.el;U.prototype.getPositionFov=U.prototype.Ej;U.prototype.getPositionViewMode=U.prototype.Jj;U.prototype.getPositionHeightMode=U.prototype.Gj;U.prototype.getPositionCanvasCoords=U.prototype.Cj;
U.prototype.getPositionCameraCoords=U.prototype.Bj;U.prototype.movePositionCoordsTo=U.prototype.xk;U.prototype.getSurfaceHeight=U.prototype.qb;U.prototype.getDistance=U.prototype.cf;U.prototype.getAzimuthCorrection=U.prototype.$e;U.prototype.getCameraInfo=U.prototype.ae;U.prototype.generateTrajectory=U.prototype.rj;U.prototype.setConfigParam=U.prototype.Ia;U.prototype.getConfigParam=U.prototype.cb;U.prototype.redraw=U.prototype.Xk;U.prototype.addRenderSlot=U.prototype.Qd;
U.prototype.moveRenderSlotBefore=U.prototype.Nf;U.prototype.moveRenderSlotAfter=U.prototype.Mf;U.prototype.removeRenderSlot=U.prototype.Xf;U.prototype.setRenderSlotEnabled=U.prototype.dg;U.prototype.getRenderSlotEnabled=U.prototype.ef;U.prototype.setLoaderSuspended=U.prototype.cl;U.prototype.getLoaderSuspended=U.prototype.zj;U.prototype.getGpuCache=U.prototype.yj;function $a(a,b){this.c=a;this.te=b||1;this.Ee=0;this.nc=[];this.mc=[];this.Vb=[]}
$a.prototype.load=function(a,b){var c=this.Vb.indexOf(a);-1==c&&(c=this.mc.indexOf(a),-1!=c&&(this.nc.splice(c,1),this.mc.splice(c,1)),this.nc.unshift(b),this.mc.unshift(a),20<this.nc.length&&(this.nc.pop(),this.mc.pop()))};$a.prototype.remove=function(a){a=this.mc.indexOf(a);-1!=a&&(this.nc.splice(a,1),this.mc.splice(a,1))};
$a.prototype.update=function(){for(;0<this.nc.length&&this.Ee<this.te;){var a=this.nc.shift(),b=this.mc.shift();-1==this.Vb.indexOf(b)&&null!=a&&(this.Vb.push(b),this.Ee++,a(b,function(a){this.Vb.splice(this.Vb.indexOf(a),1);this.Ee--;this.c.I=!0}.bind(this),function(a){this.Vb.splice(this.Vb.indexOf(a),1);this.Ee--}.bind(this)))}};
Xa.prototype.qb=function(a,b,c){var d=gc(this,a),e=d[0],d=d[1];b=Math.floor(b);if(this.j.Cf)return hc(this,a,b+8,c,b);if(null!=e&&null!==b)for(var h=0,g=this.fc.length;h<g;h++){var f=this.fc[h];if(f.Ue==e){h={Eg:d,Te:Math.ceil(b),X:{A:e.X.A.slice(),H:e.X.H.slice()},D:null,na:null,ld:null,Gl:!0};f.hh.trace(f,h);f=h.na;e=h.D;if(null!=h.na){a=f.nd;var g=f.pf,h=h.ld,l=d[0]-h.A[0],d=h.H[1]-d[1],l=l/(h.H[0]-h.A[0])*(g[0]-1),d=d/(h.H[1]-h.A[1])*(g[1]-1),h=Math.floor(l),f=Math.floor(d),l=l-h,n=f*g[0],g=n+
g[0],p=a[4*(n+h)],m=a[4*(g+h)],n=p+(a[4*(n+h+1)]-p)*l;a=n+(m+(a[4*(g+h+1)]-m)*l-n)*(d-f);a=e.re+a/255*(e.rd-e.re);c&&(this.G.lf=2,this.G.Fb=b,this.G.mf=e.f[0]);return[a,e.f[0]>=Math.floor(b),!0]}if(null!=e)return a=hc(this,a,b+8,c,b),[a[0],a[1],!0];break}}return[0,!1,!1]};
function hc(a,b,c,d,e){var h=gc(a,b);b=h[0];var g=h[1];c=Math.floor(c);if(null!=b&&null!==c)for(var f=0,l=a.fc.length;f<l;f++)if(h=a.fc[f],h.Ue==b){c={Eg:g,Te:Math.ceil(c),X:{A:b.X.A.slice(),H:b.X.H.slice()},D:null,na:null,ld:null,Gl:!0};h.Tj.trace(h,c);c=c.D;if(null!=c)return b=c.k.Ji(),b=a.$(b,"physical","navigation"),d&&(a.G.lf=1,a.G.Fb=e,a.G.mf=c.f[0]),[b[2],!0,!0];break}d&&(a.G.lf=0,a.G.Fb=e,a.G.mf=0);return[0,!1,!1]}
function gc(a,b){for(var c=a.jb.bd.aa,d=null,e=-1,h=[0,0],g=0,f=c.length;g<f;g++){var l=c[g],n=Tb(l.Qh,b,ob(l.c)),p=l.X;n[0]>=p.A[0]&&n[0]<=p.H[0]&&n[1]>=p.A[1]&&n[1]<=p.H[1]&&l.f[0]>e&&(d=l,e=l.f[0],h=n)}return[d,h]}function Ub(a,b,c){b=gc(a,b)[0];return null!=b?(a=b.f[0],c=Math.log((b.X.H[1]-b.X.A[1])/c)/Math.log(2),Math.max(0,c-8+a)):null}function sb(a,b,c,d){b=gc(a,b)[0];return null!=b?(a=b.f[0],c=Math.log(d*(b.X.H[1]-b.X.A[1])/c)/Math.log(2),Math.max(0,c-8+a)):null}
Xa.prototype.cf=function(a,b,c){var d=Tb(this.jb.Na.Bd,a,ob(this)),e=Tb(this.jb.Na.Bd,b,ob(this)),h=0,g=e[0]-d[0],f=e[1]-d[1],d=e[2]-d[2],h=c?Math.sqrt(g*g+f*f+d*d):Math.sqrt(g*g+f*f),e=ob(this).Zb();if(pb(ob(this)))return[h,q.Kg(Math.atan2(f,g))];a=(new GeographicLib.Geodesic.Geodesic(e.a,e.a/e.b-1)).Inverse(a[1],a[0],b[0],b[0]);return h>2*e.a*Math.PI/4007.5?c?[Math.sqrt(a.s12*a.s12+d*d),a.Xl]:[a.s12,a.az1]:[h,a.az1]};
function qb(a){a=ob(a).Zb();return new GeographicLib.Geodesic.Geodesic(a.a,a.a/a.b-1)}
function Vb(a,b,c,d){this.c=a;this.Ad=b.ja();this.Nc=c.ja();this.Ad.h[5]=0>this.Ad.h[5]?360+this.Ad.h[5]%360:this.Ad.h[5]%360;this.Nc.h[5]=0>this.Nc.h[5]?360+this.Nc.h[5]%360:this.Nc.h[5]%360;this.Xa=this.Ad.ja();this.ib=this.Nc.ja();this.Lc=d.mode||"auto";this.rd=d.maxHeight||1E5;this.oe=d.maxDuration||1E4;this.Kh=d.samplePeriod||10;a=this.c.cf(T(this.Xa),T(this.ib));this.Ub=a[0];this.Xc=(a[1]-90)%360;this.Xc=0>this.Xc?360+this.Xc:this.Xc;pb(ob(this.c))||qb(this);"auto"==this.Lc&&(this.Lc=2E3<this.Ub?
"ballistic":"direct");this.S=0;this.Aa=1E3;500>this.Ub?this.S=1E3:2E3>this.Ub?this.S=2E3:(this.S=this.Ub/100,300>this.S?this.S=3E3:this.Aa=1500,6E3>this.S&&(this.S=6E3),1E4<this.S&&(this.S=1E4),"direct"!=this.Lc&&(this.S*=1.8,this.Aa*=1.8));"direct"!=this.Lc&&(a=3*this.Aa,this.S=Math.max(this.S,a),this.oe<a&&(this.S=this.oe,this.Aa=this.oe/3));this.S=Math.min(this.S,this.oe);d=d.height;"ballistic"==this.Lc&&(this.Yb=Math.max(this.Xa.h[4],this.ib.h[4]),this.Yb+=d||0.5*this.Ub,this.Yb=Math.min(this.Yb,
this.rd),this.Yb-=Math.max(this.Xa.h[4],this.ib.h[4]))}function Wb(a,b){var c=T(a.Xa),d=T(a.ib);if(pb(ob(a.c)))return[c[0]+(d[0]-c[0])*b,c[1]+(d[1]-c[1])*b,c[2]+(d[2]-c[2])*b]}function Xb(a,b,c){var d=b[0]-a[0],e=b[1]-a[1];b=b[2]-a[2];180<Math.abs(d)&&(d=0<d?-(360-d):360-Math.abs(d));return[a[0]+d*c,a[1]+e*c,a[2]+b*c]}function Yb(a,b){var c=a.Xa.Cb();return c+(a.ib.Cb()-c)*b}function fc(a,b){var c=tb(a.Xa);return c+(tb(a.ib)-c)*b}
function Qb(a,b){this.c=a;this.G=a.G;this.wa=b;this.k=new Sa;this.Wb=this.m=0;this.Ta=this.L=null;this.V=0;this.ya=[];this.Ua=[]}k=Qb.prototype;k.n=function(){this.k=null;this.ph();this.mh()};k.ph=function(a){for(var b=0,c=this.ya.length;b<c;b++)this.ya[b].n();this.ya=[];!0!=a&&null!=this.L&&this.c.qc.remove(this.L);this.V=0;this.L=null};k.mh=function(a){for(var b=0,c=this.Ua.length;b<c;b++)this.G.jd-=this.Ua[b].m,this.Ua[b].n();this.Ua=[];!0!=a&&null!=this.Ta&&this.c.Eb.remove(this.Ta);this.Ta=null};
k.T=function(a){if(2==this.V){if(0==this.Ua.length){a=0;this.Ua=Array(this.ya.length);for(var b=0,c=this.ya.length;b<c;b++)this.Ua[b]=Ob(this.ya[b]),a+=this.Ua[b].m;this.G.jd+=a;this.Ta=xb(this.c.Eb,this.mh.bind(this,!0),a)}wb(this.c.qc,this.L);wb(this.c.Eb,this.Ta);return!0}0==this.V&&(a?this.wa&&this.c.Ib.remove(this.wa):this.rc());return!1};k.rc=function(){null==this.wa&&(this.wa=vb(this.c,this.Ob.u.If,{ua:this.Ob.f[0],Va:this.Ob.f[1],Wa:this.Ob.f[2]}));this.c.Ib.load(this.wa,this.ic.bind(this))};
k.ic=function(a,b,c){this.ec=b;this.dc=c;q.Hb(a,this.kc.bind(this),this.jc.bind(this));this.V=1};k.jc=function(){!0!=this.c.U&&this.dc()};
k.kc=function(a){if(!0!=this.c.U){a={Ka:a,d:0};var b=a.Ka,c;c=""+String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;c+=String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;"ME"==c&&(this.qi=b.getUint16(a.d,!0),a.d+=2,2<this.qi||(b.getFloat64(a.d,!0),a.d+=8,this.Ah=b.getUint16(a.d,!0),a.d+=2));this.ya=Array(this.Ah);b=0;for(c=this.Ah;b<c;b++)this.ya[b]=new ic(this,a),this.m+=this.ya[b].m,this.Wb+=this.ya[b].Wb;this.L=xb(this.c.qc,this.ph.bind(this,!0),this.m);this.ec();this.V=2}};
function jc(a,b,c,d){this.c=a.c;this.Kd=a.Kd;this.qe=a.qe;this.Kc=a.Kc;this.Qc=a.Qc;this.u=b;this.Bk=c;this.Ki=d;this.lc=null}jc.prototype.trace=function(a,b){this.lc=b;this.Ae(this.Kd)};
jc.prototype.Ae=function(a,b,c){if(null!=a){null==a.W&&(a.W=q.ti(this.qe,this.Qc,a,this.Kc));if(this.c.Nd!=a.vb){a.pd=a.u;a.bc={ba:a.ba,ma:a.ma,Z:a.Z,Nb:a.Nb};a.Ba=0<a.v.length?{v:a.v,p:a.p}:null;a.Yf=!1;a.ac=a.D;for(var d in a.xb)a.xb[d]={Lb:[],Cc:[],jg:!1,vb:0};a.la={};a.Z={};a.Ce=!0;a.u=null;a.ba=null;a.ma=[];a.Nb=null;a.Uc=!1;a.qg=!1;a.wb=[];a.v=[];a.p={};a.vb=this.c.Nd;this.c.I=!0;a.Ba&&(a.Ba=a.Ba)}if(!c){if(null==a.u&&0==a.wb.length)if(a.u=null,a.Uc=!1,a.qg=!1,a.wb=[],d=this.c.hg,1E6==d.length){if(!0==
kc(d[0],a.f)){var e=d[0];a.u=e}}else{for(var h=0,g=d.length;h<g;h++){a:{var e=d[h],f=a.f,l=f[0]-e.ta[0],n=0>l;if(f[0]<e.ta[0]){var l=-l,p=e.J[0][0]>>l,m=e.J[0][1]>>l,r=e.J[1][0]>>l,l=e.J[1][1]>>l;if(f[0]>e.ta[1]||f[1]<p||f[1]>r||f[2]<m||f[2]>l){e=[!1,!1];break a}}else if(p=f[1]>>l,l=f[2]>>l,f[0]>e.ta[1]||p<e.J[0][0]||p>e.J[1][0]||l<e.J[0][1]||l>e.J[1][1]){e=[!1,!1];break a}e=[!0,n]}if(!0==e[0]){e=d[h];if(a.f[0]>e.ta[0]&&(f=a.sb,null!=f&&null!=f.W))if((n=lc(f.W,e))&&n.T())if(f=n.fd(f.f)){if(n=a.f,
0==(f.K&1<<(n[2]-(f.f[2]<<1)<<1)+(n[1]-(f.f[1]<<1))+4))continue}else continue;else continue;a.wb.push(e)}}1<a.wb.length?a.Uc=!0:a.u=a.wb[0]}if(null==a.D||a.ac){if(!(mc(this,a)||null!=a.D&&a.ac))return;a.ac&&(c=!0)}}if(null!=a.D&&(a.D.Lf.ki(),a.pd&&a.pd==a.u&&(a.pd=null,a.bc&&(a.ba=a.bc.ba,a.ma=a.bc.ma,a.Z=a.bc.Z,a.Nb=a.bc.Nb,a.pd=null,a.bc=null)),b=this.Bk(a,this.lc,b,c),!0==b[0]))for(c=this.Ki(a,this.lc),d=0,h=c.length;d<h;d++)this.Ae(a.O[c[d]],b[1],b[2])}};
function mc(a,b){if(b.Uc){for(var c=b.wb,d=0,e=0,h=c.length;e<h;e++){var g=c[e],f=lc(b.W,g);null==f&&(f=new nc(b.W,g),b.W.hb.push(f));!0==f.T()&&d++}if(d==h){c=b.wb;d=null;e=0;for(h=c.length;e<h;e++)if(g=c[e],f=lc(b.W,g),!0==f.T()&&(f=f.fd(b.f),null!=f)){if(g.hd&&0==(f.K&1)&&0<f.je){for(var l=f.je-1,n=!1,p=e;p<h;p++)if(c[p].Ql<=l){n=p>e;e=p-1;break}if(n)continue}if(0!=(f.K&1)){d=f.ja();b.u=g;break}}e=0;for(h=c.length;e<h;e++)g=c[e],f=lc(b.W,g),!0==f.T()&&(f=f.fd(b.f),null!=f&&(d?(d.K|=f.K&240,d.k.q[0]=
Math.min(d.k.q[0],f.k.q[0]),d.k.q[1]=Math.min(d.k.q[1],f.k.q[1]),d.k.q[2]=Math.min(d.k.q[2],f.k.q[2]),d.k.B[0]=Math.max(d.k.B[0],f.k.B[0]),d.k.B[1]=Math.max(d.k.B[1],f.k.B[1]),d.k.B[2]=Math.max(d.k.B[2],f.k.B[2])):(d=f.ja(),b.u=g)));b.D=d;b.ac=null;a.c.I=!0}else return!1}c=b.u;if(null==c)return!1;d=lc(b.W,c);null==d&&(d=new nc(b.W,c),b.W.hb.push(d));if(!0==d.T()){if(b.Uc||(b.D=d.fd(b.f),b.ac=null,a.c.I=!0),null!=b.D)for(b.D.Ob=b,b.ac=null,a.c.I=!0,c=0;4>c;c++)0!=(b.D.K&1<<c+4)==!0?b.Je(c):(d=b,e=
c,null!=d.O[e]&&(d.O[e].n(),d.O[e]=null))}else return!1;return!0}MelownMetanodeFlags_GeometryPresent=1;MelownMetanodeFlags_NavtilePresent=3;MelownMetanodeFlags_InternalTexturePresent=7;MelownMetanodeFlags_CoarsenessControl=15;MelownMetanodeFlags_ChildShift=3;
function oc(a,b,c){this.Lf=a;this.c=a.c;this.f=b;this.p=[];if(c){a=c.Ka;this.K=a.getUint8(c.d,!0);c.d+=1;var d=6*(this.f[0]+2)+7>>3;b=new Uint8Array(d);for(var e=0,h=d;e<h;e++)b[e]=a.getUint8(c.d,!0),c.d+=1;for(var h=this.f[0]+2,d=[0,0,0],g=[0,0,0],f=0,l=this.c.nl,n=this.c.ml,e=0;3>e;e++)d[e]=pc(b,h,f)*l[e]+n[e],f+=h,g[e]=pc(b,h,f)*l[e]+n[e],f+=h;e=f=0;for(h=b.length;e<h;e++)f+=b[e];0==f&&(d[0]=Number.POSITIVE_INFINITY,d[1]=Number.POSITIVE_INFINITY,d[2]=Number.POSITIVE_INFINITY,g[0]=Number.NEGATIVE_INFINITY,
g[1]=Number.NEGATIVE_INFINITY,g[2]=Number.NEGATIVE_INFINITY);this.k=new Sa(d[0],d[1],d[2],g[0],g[1],g[2]);this.je=a.getUint8(c.d,!0);c.d+=1;this.Cd=q.Xi(a.getUint16(c.d,!0));c.d+=2;this.Yd=a.getUint16(c.d,!0);c.d+=2;0==(this.K&4)&&(this.Cd=Number.POSITIVE_INFINITY);0==(this.K&8)&&(this.Yd=256);this.re=a.getInt16(c.d,!0);c.d+=2;this.rd=a.getInt16(c.d,!0);c.d+=2}}oc.prototype.n=function(){};function pc(a,b,c){for(var d=0,e=0;e<b;e++)a[c>>3]&1<<7-(c&7)&&(d|=1<<b-e-1),c++;return d/((1<<b)-1)}
oc.prototype.ja=function(){var a=new oc(this.Lf,this.f);a.K=this.K;a.re=this.re;a.rd=this.rd;a.k=this.k.ja();a.je=this.je;a.Cd=this.Cd;a.Yd=this.Yd;return a};
oc.prototype.gd=function(a,b){var c=b;null!=c?(c[0]=Ua(this.k,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=Ua(this.k,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=Ua(this.k,2),c[11]=0,c[12]=this.k.q[0]-a[0],c[13]=this.k.q[1]-a[1],c[14]=this.k.q[2]-a[2],c[15]=1):(c=q.e.create(),q.e.multiply(q.wc(this.k.q[0]-a[0],this.k.q[1]-a[1],this.k.q[2]-a[2]),q.ve(Ua(this.k,0),Ua(this.k,1),Ua(this.k,2)),c));return c};
oc.prototype.cd=function(a){var b=this.c.o;b.g.useProgram(b.Oc,"aPosition");var c=q.e.create(),d=q.e.create();q.e.multiply(Qa(b.l),this.gd(a),d);a=Ra(b.l);q.e.multiply(a,d,c);ra(b.Oc,"uMVP",c);b.tg.Ea(b.Oc,"aPosition")};function qc(a,b,c){this.f=c;this.c=a;this.sb=b;this.hb=[];this.O=[null,null,null,null]}
qc.prototype.n=function(){for(var a=0,b=this.hb.length;a<b;a++)this.hb[a].n();this.hb=[];for(a=0;4>a;a++)null!=this.O[a]&&this.O[a].n();this.O=[null,null,null,null];a=this.sb;this.sb=null;null!=a&&a.removeChild(this)};qc.prototype.yc=function(){return 0==this.hb.length?(this.n(),!1):!0};function lc(a,b){for(var c=a.hb,d=0,e=c.length;d<e;d++)if(c[d].u==b)return c[d];return null}function rc(a,b){for(var c=0,d=a.hb.length;c<d;c++)if(a.hb[c]==b){a.hb.splice(c,1);break}}
qc.prototype.Je=function(a){var b=this.f,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.O[a]=new qc(this.c,this,b)};qc.prototype.removeChild=function(a){for(var b=0;4>b;b++)this.O[b]==a&&(this.O[b].n(),this.O[b]=null)};q.ti=function(a,b,c,d){var e=c.f;b=b[0];c=e[1]>>d<<d;d=e[2]>>d<<d;for(e=e[0];e>b;e--){var h=0,g=1<<e-b-1;0!=(c&g)&&(h+=1);0!=(d&g)&&(h+=2);null==a.O[h]&&a.Je(h);a=a.O[h]}return a};
function nc(a,b){this.W=a;this.c=a.c;this.u=b;this.f=a.f;this.aa=[];this.m=this.V=0;this.L=null}k=nc.prototype;k.n=function(a){!0!=a&&null!=this.L&&this.c.hc.remove(this.L);rc(this.W,this);this.W.yc();this.W=null;this.u=this.V=0;this.L=null;a=0;for(var b=this.aa.length;a<b;a++)null!=this.aa.Ob&&this.aa.Ob.yc();this.aa=[]};k.T=function(){if(2==this.V)return!0;0==this.V&&this.rc();return!1};k.ki=function(){null!=this.L&&wb(this.c.hc,this.L)};
k.fd=function(a){var b=a[1]-this.f[1]-this.xd;a=a[2]-this.f[2]-this.yd;return 0>b||0>a||b>=this.qa||a>=this.Za?null:this.aa[this.qa*a+b]};k.rc=function(){null==this.wa&&(this.wa=vb(this.c,this.u.pe,{ua:this.f[0],Va:this.f[1],Wa:this.f[2]}));this.c.Ib.load(this.wa,this.ic.bind(this))};k.ic=function(a,b,c){this.ec=b;this.dc=c;q.Hb(a,this.kc.bind(this),this.jc.bind(this));this.V=1};k.jc=function(){!0!=this.c.U&&this.dc()};
k.kc=function(a){!0!=this.c.U&&(this.m+=4*a.byteLength,this.Qf({Ka:a,d:0}),this.L=xb(this.c.hc,this.n.bind(this,!0),this.m),this.ec(),this.V=2)};
k.Qf=function(a){var b=a.Ka,c;c=""+String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;c+=String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;"MT"==c&&(c=b.getUint16(a.d,!0),a.d+=2,1<c||(this.ua=b.getUint8(a.d,!0),a.d+=1,this.Jf=b.getUint32(a.d,!0),a.d+=4,this.Kf=b.getUint32(a.d,!0),a.d+=4,this.xd=b.getUint16(a.d,!0),a.d+=2,this.yd=b.getUint16(a.d,!0),a.d+=2,this.qa=b.getUint16(a.d,!0),a.d+=2,this.Za=b.getUint16(a.d,!0),a.d+=2,b.getUint8(a.d,!0),a.d+=1,this.Rf(a),this.Sf(a)))};
k.Rf=function(a){var b=a.Ka;this.Zc=b.getUint8(a.d,!0);a.d+=1;b.getUint16(a.d,!0);a.d+=2;if(0==this.Zc)this.p=[];else{var c=this.qa*this.Za+7>>3;this.p=Array(this.Zc);for(var d=0,e=this.p.length;d<e;d++){var h=b.getUint16(a.d,!0);a.d+=2;for(var g=new Uint8Array(c),f=0;f<c;f++)g[f]=b.getUint8(a.d,!0),a.d+=1;this.p[d]={Oe:h,Pe:g}}}};
k.Ke=function(){for(var a=0;a<this.Za;a++)for(var b=0;b<this.qa;b++)for(var c=this.qa*a+b,d=1<<(c&7),c=c>>3,e=0,h=this.p.length;e<h;e++)this.p[e].Pe[c]&d&&this.aa[a*this.qa+b].p.push(this.p[e].Oe)};k.Sf=function(a){this.aa=Array(this.qa*this.Za);for(var b=0,c=0;c<this.Za;c++)for(var d=0;d<this.qa;d++)this.aa[b]=new oc(this,[this.ua,this.Jf+this.xd+d,this.Kf+this.yd+c],a),b++;this.Ke()};function sc(a,b,c,d,e){this.c=a;this.f=b;this.Qh=mb(this.c,c);this.X=d;this.gh=e}
function cb(a,b){this.c=a;this.Pa=a.Pa;this.Md=!1;this.f=b.id||null;this.Lg=b.description||"";var c=b.model;if(null!=c&&(this.Na={Bd:mb(this.c,c.physicalSrs),se:mb(this.c,c.navigationSrs),Vf:mb(this.c,c.publicSrs)},this.lc={},null!=b.parameters&&(c=b.parameters,this.lc.Kc=c.metaBinaryOrder||1,this.lc.zk=c.navDelta||8),c=b.division,null!=c)){this.bd={Im:c.rootLod||0,Wl:c.arity||null,gh:c.heightRange||[0,1]};var d;d=c.extents;d=null==d?{A:[0,0,0],H:[1,1,1]}:{A:d.ll||[0,0,0],H:d.ur||[1,1,1]};this.bd.X=
d;this.c.nl=[d.H[0]-d.A[0],d.H[1]-d.A[1],d.H[2]-d.A[2]];this.c.ml=d.A;c=c.nodes;this.bd.aa=[];if(null!=c){d=0;for(var e=c.length;d<e;d++){var h;var g=c[d],f=void 0,l=void 0;h=g.srs;var n=void 0,f=g.extents,n=null==f?{A:[0,0],H:[1,1]}:{A:f.ll||[0,0],H:f.ur||[1,1]},g=g.id;null!=g?(f=g.lod||0,l=g.position||[0,0],h=new sc(this.c,[f,l[0],l[1]],h,n,this.gh)):h=void 0;this.bd.aa.push(h)}this.Md=!0}}}cb.prototype.eb=function(){return{physicalSrs:this.Na.Bd.f,navigationSrs:this.Na.se.f,publicSrs:this.Na.Vf.f}};
cb.prototype.$=function(a,b,c){var d,e;switch(b){case "public":d=this.Na.Vf;break;case "physical":d=this.Na.Bd;break;case "navigation":d=this.Na.se}switch(c){case "public":e=this.Na.Vf;break;case "physical":e=this.Na.Bd;break;case "navigation":e=this.Na.se}a:{b=d;b.T();if("string"!==typeof e){if(e.f==b.f){e=a.slice();break a}e.T()}a=a.slice();a[2]=tc(b,a);a=b.Pa(b.Ra,"string"===typeof e?e:e.Ra,a);"string"!==typeof e&&(a[2]=uc(e,a));e=a}return e};k=Xa.prototype;
k.Qd=function(a,b,c){this.pa.push({id:a,vg:b,Xe:c})};k.Nf=function(a,b){var c=nb(this.pa,a),d=nb(this.pa,b);-1!=c&&-1!=d&&this.pa.splice(d,0,this.pa.splice(c,1)[0])};k.Mf=function(a,b){var c=nb(this.pa,a),d=nb(this.pa,b);-1!=c&&-1!=d&&(d++,this.pa.splice(d,0,this.pa.splice(c,1)[0]))};k.Xf=function(){var a=nb(this.pa,id2_);-1!=a&&this.pa.splice(a,1)};k.dg=function(a,b){var c=nb(this.pa,a);-1!=c&&(this.pa[c].Xe=b)};k.ef=function(){var a=nb(this.pa,id2_);return-1!=a?this.pa[a].Xe:!1};
nc=function(a,b){this.W=a;this.c=a.c;this.u=b;this.f=a.f;this.aa=[];this.m=this.V=0;this.L=null};k=nc.prototype;k.n=function(a){!0!=a&&null!=this.L&&this.c.hc.remove(this.L);rc(this.W,this);this.W.yc();this.W=null;this.u=this.V=0;this.L=null;a=0;for(var b=this.aa.length;a<b;a++)null!=this.aa.Ob&&this.aa.Ob.yc();this.aa=[]};k.T=function(){if(2==this.V)return!0;0==this.V&&this.rc();return!1};k.ki=function(){null!=this.L&&wb(this.c.hc,this.L)};
k.fd=function(a){var b=a[1]-this.f[1]-this.xd;a=a[2]-this.f[2]-this.yd;return 0>b||0>a||b>=this.qa||a>=this.Za?null:this.aa[this.qa*a+b]};k.rc=function(){null==this.wa&&(this.wa=vb(this.c,this.u.pe,{ua:this.f[0],Va:this.f[1],Wa:this.f[2]}));this.c.Ib.load(this.wa,this.ic.bind(this))};k.ic=function(a,b,c){this.ec=b;this.dc=c;q.Hb(a,this.kc.bind(this),this.jc.bind(this));this.V=1};k.jc=function(){!0!=this.c.U&&this.dc()};
k.kc=function(a){!0!=this.c.U&&(this.m+=4*a.byteLength,this.Qf({Ka:a,d:0}),this.L=xb(this.c.hc,this.n.bind(this,!0),this.m),this.ec(),this.V=2)};
k.Qf=function(a){var b=a.Ka,c;c=""+String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;c+=String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;"MT"==c&&(c=b.getUint16(a.d,!0),a.d+=2,1<c||(this.ua=b.getUint8(a.d,!0),a.d+=1,this.Jf=b.getUint32(a.d,!0),a.d+=4,this.Kf=b.getUint32(a.d,!0),a.d+=4,this.xd=b.getUint16(a.d,!0),a.d+=2,this.yd=b.getUint16(a.d,!0),a.d+=2,this.qa=b.getUint16(a.d,!0),a.d+=2,this.Za=b.getUint16(a.d,!0),a.d+=2,b.getUint8(a.d,!0),a.d+=1,this.Rf(a),this.Sf(a)))};
k.Rf=function(a){var b=a.Ka;this.Zc=b.getUint8(a.d,!0);a.d+=1;b.getUint16(a.d,!0);a.d+=2;if(0==this.Zc)this.p=[];else{var c=this.qa*this.Za+7>>3;this.p=Array(this.Zc);for(var d=0,e=this.p.length;d<e;d++){var h=b.getUint16(a.d,!0);a.d+=2;for(var g=new Uint8Array(c),f=0;f<c;f++)g[f]=b.getUint8(a.d,!0),a.d+=1;this.p[d]={Oe:h,Pe:g}}}};
k.Ke=function(){for(var a=0;a<this.Za;a++)for(var b=0;b<this.qa;b++)for(var c=this.qa*a+b,d=1<<(c&7),c=c>>3,e=0,h=this.p.length;e<h;e++)this.p[e].Pe[c]&d&&this.aa[a*this.qa+b].p.push(this.p[e].Oe)};k.Sf=function(a){this.aa=Array(this.qa*this.Za);for(var b=0,c=0;c<this.Za;c++)for(var d=0;d<this.qa;d++)this.aa[b]=new oc(this,[this.ua,this.Jf+this.xd+d,this.Kf+this.yd+c],a),b++;this.Ke()};
function bb(a,b,c){this.c=a;this.f=b;this.Pa=a.Pa;this.Oi=c.comment||null;this.Ra=c.srsDef||null;this.Ph=c.srsModifiers||[];this.ca=c.type||"projected";this.Ll=c.vdatum||"orthometric";this.Ra=c.srsDefEllps||this.Ra;a=c.periodicity;this.Ik=null==a?null:{type:a.type||"",period:a.period||0};this.fg=this.Pa(this.Ra).info();this.Bb=this.sa=null;c.geoidGrid&&(c=c.geoidGrid,this.sa={Jg:c.definition||null,ol:c.srsDefEllps||null,lg:c.valueRange||[0,1]},this.sa.X=null!=c.extents?{A:c.extents.ll,H:c.extents.ur}:
{A:[0,0],H:[1,1]},null!=this.sa.Jg&&(c=vb(this.c,this.sa.Jg,{},null),this.Bb=new Rb(this.c,c,!0)))}bb.prototype.eb=function(){return{comment:this.Oi,srsDef:this.Ra,srsModifiers:this.Ph,type:this.ca,vdatum:this.Ll,srsDefEllps:this.Ra,a:this.fg.a,b:this.fg.b}};bb.prototype.Zb=function(){return this.fg};bb.prototype.T=function(){return null==this.sa||null!=this.Bb&&this.Bb.T()};function pb(a){return"projected"==a.ca}function tc(a,b){var c=b[2]||0,c=c/vc(a,b);return c-=wc(a,b)}
function uc(a,b){var c=b[2]||0,c=c+wc(a,b);return c*=vc(a,b)}
function wc(a,b){if(null!=a.Bb&&(null==a.sa||null!=a.Bb&&a.Bb.T())){mapCoords_=a.Pa(a.Ra,a.sa.ol,[b[0],b[1]]);var c=mapCoords_[0]-a.sa.X.A[0],d=a.sa.X.H[1]-mapCoords_[1],e=a.Bb.pf,c=e[0]/(a.sa.X.H[0]-a.sa.X.A[0])*c,d=e[1]/(a.sa.X.H[1]-a.sa.X.A[1])*d,c=q.Fc(c,0,e[0]-2),d=q.Fc(d,0,e[1]-2),h=Math.floor(c),g=Math.floor(d),c=c-h,f=a.Bb.nd,l=g*e[0],e=l+e[0],n=f[4*(l+h)],p=f[4*(e+h)],l=n+(f[4*(l+h+1)]-n)*c,d=l+(p+(f[4*(e+h+1)]-p)*c-l)*(d-g);return d=a.sa.lg[0]+(a.sa.lg[1]-a.sa.lg[0])/255*d}return 0}
function vc(a,b){if(-1!=a.Ph.indexOf("adjustVertical")){var c=a.Zb(),d="+proj=longlat  +alpha=0 +gamma=0 +a="+c.a+" +b="+c.b+" +x_0=0 +y_0=0",e=a.Pa(a.Ra,d,[b[0],b[1]]),e=(new GeographicLib.Geodesic.Geodesic(c.a,c.a/c.b-1)).Direct(e[1],e[0],90,1E3),e=[e.um,e.pm],e=a.Pa(d,a.Ra,e),d=e[0]-b[0],e=e[1]-b[1];return Math.sqrt(d*d+e*e)/1E3}return 1}
function Tb(a,b,c){a.T();if("string"!==typeof c){if(c.f==a.f)return b.slice();c.T()}b=b.slice();"string"!==typeof c&&(b[2]=tc(c,b));b=a.Pa("string"===typeof c?c:c.Ra,a.Ra,b);b[2]=uc(a,b);return b}
function ab(a){this.c=a;this.s=a.s;this.od=a.s.od;this.rh=this.Ih=this.Gd=this.Rg=this.Rh=this.$d=this.Og=0;this.Wk=!1;this.ee=0;this.va=500;this.dh=Array(this.va);this.Xg=Array(this.va);this.Wg=Array(this.va);this.Yg=Array(this.va);this.Zg=Array(this.va);this.Ug=Array(this.va);this.Vg=Array(this.va);this.ah=Array(this.va);this.$g=Array(this.va);this.bh=Array(this.va);this.Qj=Array(this.va);this.Pj=Array(this.va);this.Oj=Array(this.va);for(a=this.ee=0;a<this.va;a++)this.dh[a]=0,this.Xg[a]=0,this.Wg[a]=
0,this.Yg[a]=0,this.Zg[a]=0,this.Vg[a]=0,this.Ug[a]=0,this.ah[a]=0,this.$g[a]=0,this.bh[a]=0,this.Qj[a]=[0,[]],this.Pj[a]=[[0,0],[0,0]],this.Oj[a]=[[0,0],[0,0]];this.Rj=this.Sj=this.mf=this.Fb=this.lf=this.kd=this.jd=0}
ab.prototype.end=function(a){var b=performance.now(),c=b-this.Ih,d=b-this.Rg;this.Rg=b;a?(this.Gd+=c,this.rh=c):this.Gd+=this.rh;this.Wk&&(a=this.ee,this.dh[a]=c,this.Xg[a]=0,this.Wg[a]=0,this.Yg[a]=0,this.Zg[a]=d,this.Vg[a]=this.c.qc.mb,this.Ug[a]=this.c.hc.mb,this.ah[a]=this.kd,this.$g[a]=this.jd,this.bh[a]=this.$d,this.ee=(this.ee+1)%this.va,this.od.Xm(this));0==this.Rh%50&&(this.Gd=0,null!=this.od&&this.od.Ym(this))};MelownSubmeshFlags_InternalTexcoords=1;
MelownSubmeshFlags_ExternalTexcoords=2;MelownSubmeshFlags_PerVertexUndulation=4;MelownSubmeshFlags_TextureMode=8;
function ic(a,b){this.c=a.c;this.Be=this.Ab=this.Gb=this.r=null;this.gb=a;this.k=new Sa;this.Wb=this.m=0;if(null!=b){var c=b.Ka;this.K=c.getUint8(b.d,!0);b.d+=1;1<this.gb.qi?(this.vc=c.getUint8(b.d,!0),b.d+=1):this.vc=0;this.lb=c.getUint16(b.d,!0);b.d+=2;var d=this.k.q,e=this.k.B;d[0]=c.getFloat64(b.d,!0);b.d+=8;d[1]=c.getFloat64(b.d,!0);b.d+=8;d[2]=c.getFloat64(b.d,!0);b.d+=8;e[0]=c.getFloat64(b.d,!0);b.d+=8;e[1]=c.getFloat64(b.d,!0);b.d+=8;e[2]=c.getFloat64(b.d,!0);b.d+=8;var c=b.Ka,d=b.d,e=c.getUint16(b.d,
!0),d=d+2,h=null,g=null,f=new Float32Array(3*e);this.K&MelownSubmeshFlags_ExternalTexcoords&&(h=new Float32Array(2*e));this.K&MelownSubmeshFlags_PerVertexUndulation&&(g=new Float32Array(e));for(var l=1/65535,n=0;n<e;n++){var p=3*n;f[p]=c.getUint16(d,!0)*l;d+=2;f[p+1]=c.getUint16(d,!0)*l;d+=2;f[p+2]=c.getUint16(d,!0)*l;d+=2;null!=h&&(p=2*n,h[p]=c.getUint16(d,!0)*l,d+=2,h[p+1]=(65535-c.getUint16(d,!0))*l,d+=2);null!=g&&(g[n]=c.getUint16(d,!0)*l,d+=2)}this.ei=f;this.ci=h;this.Be=g;b.d=d;if(this.K&MelownSubmeshFlags_InternalTexcoords){c=
b.Ka;d=b.d;f=c.getUint16(b.d,!0);d+=2;e=new Float32Array(2*f);h=1/65535;g=0;for(f*=2;g<f;g+=2)e[g]=c.getUint16(d,!0)*h,d+=2,e[g+1]=(65535-c.getUint16(d,!0))*h,d+=2;this.di=e;b.d=d}c=b.Ka;d=b.d;e=c.getUint16(b.d,!0);d+=2;g=h=null;f=new Float32Array(9*e);this.K&MelownSubmeshFlags_InternalTexcoords&&(h=new Float32Array(6*e));this.K&MelownSubmeshFlags_ExternalTexcoords&&(g=new Float32Array(6*e));for(var l=this.ei,n=this.ci,p=this.di,m=0;m<e;m++){var r=9*m,w=c.getUint16(d,!0),d=d+2,s=c.getUint16(d,!0),
d=d+2,y=c.getUint16(d,!0),d=d+2,A=3*w;f[r]=l[A];f[r+1]=l[A+1];f[r+2]=l[A+2];A=3*s;f[r+3]=l[A];f[r+4]=l[A+1];f[r+5]=l[A+2];A=3*y;f[r+6]=l[A];f[r+7]=l[A+1];f[r+8]=l[A+2];null!=g&&(r=6*m,g[r]=n[2*w],g[r+1]=n[2*w+1],g[r+2]=n[2*s],g[r+3]=n[2*s+1],g[r+4]=n[2*y],g[r+5]=n[2*y+1]);null!=h&&(w=c.getUint16(d,!0),d+=2,s=c.getUint16(d,!0),d+=2,y=c.getUint16(d,!0),d+=2,r=6*m,h[r]=p[2*w],h[r+1]=p[2*w+1],h[r+2]=p[2*s],h[r+3]=p[2*s+1],h[r+4]=p[2*y],h[r+5]=p[2*y+1])}this.r=f;this.Gb=h;this.Ab=g;this.ci=this.di=this.ei=
null;b.d=d;this.m=this.r.length;this.Gb&&(this.m+=this.Gb.length);this.Ab&&(this.m+=this.Ab.length);this.Be&&(this.m+=this.Be.length);this.m*=4;this.Wb=e}}ic.prototype.n=function(){this.Be=this.Ab=this.Gb=this.r=null};function Ob(a){return new ta(a.c.o.g,{k:a.k,r:a.r,Fe:a.Gb,Kl:a.Ab},0,a.c.s)}
ic.prototype.gd=function(a,b){var c=b;null!=c?(c[0]=Ua(this.k,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=Ua(this.k,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=Ua(this.k,2),c[11]=0,c[12]=this.k.q[0]-a[0],c[13]=this.k.q[1]-a[1],c[14]=this.k.q[2]-a[2],c[15]=1):(c=q.e.create(),q.e.multiply(q.wc(this.k.q[0]-a[0],this.k.q[1]-a[1],this.k.q[2]-a[2]),q.ve(Ua(this.k,0),Ua(this.k,1),Ua(this.k,2)),c));return c};
ic.prototype.cd=function(a){var b=this.c.o;b.g.useProgram(b.Oc,"aPosition");var c=q.e.create(),d=q.e.create();q.e.multiply(Qa(b.l),this.gd(a),d);a=Ra(b.l);q.e.multiply(a,d,c);ra(b.Oc,"uMVP",c);b.tg.Ea(b.Oc,"aPosition")};
function eb(a,b,c){this.c=a;this.f=b.id||null;this.Kc=b.metaBinaryOrder||1;this.pe=b.metaUrl||"";this.yh=b.navUrl||"";this.zk=b.navDelta||1;this.If=b.meshUrl||"";this.Yh=b.textureUrl||"";this.ta=b.lodRange||[0,0];this.J=b.tileRange||[[0,0],[0,0]];this.lb=b.textureLayer||null;this.nb=[];this.hd=c||!1;this.vc=[];if(this.hd)for(a=0,b=this.f.length;a<b;a++)this.vc.push(jb(this.c,this.f[a]))}
eb.prototype.eb=function(){return{metaUrl:this.pe,navUrl:this.yh,meshUrl:this.If,textureUrl:this.Yh,lodRange:this.ta,tileRange:this.J,textureLayer:this.lb}};eb.prototype.fe=function(a){var b=a[0]-this.ta[0];if(0>b)return!1;var c=a[1]>>b,b=a[2]>>b;return a[0]<this.ta[0]||a[0]>this.ta[1]||c<this.J[0][0]||c>this.J[1][0]||b<this.J[0][1]||b>this.J[1][1]?!1:!0};
function kc(a,b){if(b[0]>a.ta[1])return!1;var c=b[0]-a.ta[0];if(0<=c){var d=b[1]>>c,c=b[2]>>c;if(d<a.J[0][0]||d>a.J[1][0]||c<a.J[0][1]||c>a.J[1][1])return!1}else if(c=-c,b[1]<a.J[0][0]>>c||b[1]>a.J[1][0]>>c||b[2]<a.J[0][1]>>c||b[2]>a.J[1][1]>>c)return!1;return!0}function Sb(a,b,c){return vb(a.c,a.Yh,{ua:b[0],Va:b[1],Wa:b[2]},c,void 0)}q.xi=eb;q.yi=eb;function Rb(a,b,c){this.c=a;this.G=a.G;this.Fa=this.pf=this.nd=this.oa=null;this.V=0;this.wa=b;this.na=c||!1;this.Ta=this.L=null}k=Rb.prototype;
k.n=function(){this.Y=null;this.oh();this.nh()};k.oh=function(a){this.nd=this.oa=null;!0!=a&&null!=this.L&&this.c.qc.remove(this.L);this.V=0;this.L=null};k.nh=function(a){null!=this.Fa&&(this.G.kd-=this.Fa.m,this.Fa.n());this.Fa=null;!0!=a&&null!=this.Ta&&this.c.Eb.remove(this.Ta);this.Ta=null};
k.T=function(a){if(2==this.V)return this.na?null==this.nd&&(a=document.createElement("canvas"),a.width=this.oa.naturalWidth,a.height=this.oa.naturalHeight,a=a.getContext("2d"),a.drawImage(this.oa,0,0),this.nd=a.getImageData(0,0,this.oa.naturalWidth,this.oa.naturalHeight).data,this.pf=[this.oa.naturalWidth,this.oa.naturalHeight],this.oa=null):(null==this.Fa&&(this.Fa=new Ea(this.c.o.g,null,this.c.s),Ga(this.Fa,this.oa,"linear",!1),this.G.kd+=this.Fa.m,this.Ta=xb(this.c.Eb,this.nh.bind(this,!0),this.Fa.m)),
wb(this.c.qc,this.L),wb(this.c.Eb,this.Ta)),!0;0==this.V&&(a?this.wa&&this.c.Ib.remove(this.wa):this.rc());return!1};k.rc=function(){this.c.Ib.load(this.wa,this.ic.bind(this))};k.ic=function(a,b,c){this.ec=b;this.dc=c;this.oa=q.Ja.qf(a,this.kc.bind(this),this.jc.bind(this));this.V=1};k.jc=function(){!0!=this.c.U&&this.dc()};k.kc=function(){!0!=this.c.U&&(this.L=xb(this.c.qc,this.oh.bind(this,!0),this.oa.naturalWidth*this.oa.naturalHeight*3),this.V=2,this.ec())};
function xc(a,b,c){this.c=a;this.f=c;this.sb=b;this.Nd=a.Nd;this.Yf=!1;this.Nb=this.ba=this.u=this.ac=this.W=this.D=null;this.ma=[];this.qg=this.Uc=!1;this.wb=[];this.v=[];this.xb={};this.la={};this.Z={};this.Ce=!0;this.na=null;this.v=[];this.p=[];this.O=[null,null,null,null]}
xc.prototype.n=function(){for(var a=0;4>a;a++)null!=this.O[a]&&this.O[a].n();null!=this.ba&&this.ba.n();for(var b in this.ma)null!=this.ma[c]&&this.ma[c].n();null!=this.Nb&&this.Nb.n();null!=this.na&&this.na.n();for(var c in this.Z)null!=this.Z[c]&&this.Z[c].n();this.ba=this.u=this.W=this.D=null;this.ma=[];this.Nb=null;this.xb={};this.la={};this.Z={};this.Ce=!0;this.qg=this.Uc=!1;this.wb=[];this.Yf=!1;this.na=this.Ba=this.bc=this.pd=null;this.v=[];this.p={};this.O=[null,null,null,null];a=this.sb;
this.sb=null;null!=a&&a.removeChild(this)};xc.prototype.yc=function(){null!=this.W&&!1!=lc(this.W,this.u)||this.n()};xc.prototype.Je=function(a){if(!this.O[a]){var b=this.f,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.O[a]=new xc(this.c,this,b)}};xc.prototype.removeChild=function(a){for(var b=0;4>b;b++)this.O[b]==a&&(this.O[b].n(),this.O[b]=null)};
function hb(a,b,c){this.c=a;this.l=a.l;this.Qc=b.f;this.Ue=b;this.Kc=this.c.jb.lc.Kc;this.sj=!pb(ob(this.c));this.Kd=new xc(this.c,null,this.Qc);this.qe=new qc(this.c,null,this.Qc);this.Uh=new jc(this,null,this.Ae.bind(this),this.Fl.bind(this));!0!=c&&(this.hh=new jc(this,null,this.Hl.bind(this),this.gi.bind(this)),this.Tj=new jc(this,null,this.Il.bind(this),this.gi.bind(this)));this.j=this.c.j;this.Mc=1}k=hb.prototype;k.n=function(){this.hh=this.Uh=this.qe=this.Kd=null};
k.$b=function(){var a=vb(this.c,surface.pe,{ua:result_[0],Va:result_[1],Wa:result_[2]});map_.Ib.load(a,metatile_.tm.bind(metatile_,a));this.Am.load();this.Kd.Lf=1};k.Ea=function(){this.Mc=this.c.Mc;var a=this.Ue.Qh.Ik;null!=a?(Ac(this),"X"==a.ca&&(Ac(this),Ac(this))):Ac(this)};function Ac(a){a.Uh.trace(a.Qc)}k.Fl=function(){return[0,1,2,3]};
k.Ae=function(a,b,c,d){if(null==a||null==a.D)return[!1,c,d];b=a.D;var e=this.c.Ne;if(!0!=this.Rd(a.f,b.k,e))return[!1,c,d];var h;if(0!=(b.K&1))if(h=Number.POSITIVE_INFINITY,0!=(b.K&4)?h=this.Mc*b.Cd:0!=(b.K&8)&&(h=b.k.tk/b.Yd*this.Mc),!0==this.l.Gk){var g=this.l.ri;h=[2*h/g,g]}else{var g=b.k,f=g.q,l=g.B,g=[f[0]-e[0],f[1]-e[1]],n=[l[0]-e[0],f[1]-e[1]],p=[l[0]-e[0],l[1]-e[1]],m=[f[0]-e[0],l[1]-e[1]],f=f[2]-e[2],l=l[2]-e[2],r=0,r=0<g[1]?0<g[0]?0>l?P(this.l,[g[0],g[1],l]):0<f?P(this.l,[g[0],g[1],f]):
P(this.l,[g[0],g[1],0]):0>n[0]?0>l?P(this.l,[n[0],n[1],l]):0<f?P(this.l,[n[0],n[1],f]):P(this.l,[n[0],n[1],0]):0>l?P(this.l,[0,n[1],l]):0<f?P(this.l,[0,n[1],f]):P(this.l,[0,n[1],0]):0>m[1]?0<m[0]?0>l?P(this.l,[m[0],m[1],l]):0<f?P(this.l,[m[0],m[1],f]):P(this.l,[m[0],m[1],0]):0>p[0]?0>l?P(this.l,[p[0],p[1],l]):0<f?P(this.l,[p[0],p[1],f]):P(this.l,[p[0],p[1],0]):0>l?P(this.l,[0,p[1],l]):0<f?P(this.l,[0,p[1],f]):P(this.l,[0,p[1],0]):0<m[0]?0>l?P(this.l,[g[0],0,l]):0<f?P(this.l,[g[0],0,f]):P(this.l,[g[0],
0,0]):0>p[0]?0>l?P(this.l,[n[0],0,l]):0<f?P(this.l,[n[0],0,f]):P(this.l,[n[0],0,0]):0>l?P(this.l,[0,0,l]):0<f?P(this.l,[0,0,f]):P(this.l,[0,0,0]);h=[r[0]*h,r[1]]}else h=[Number.POSITIVE_INFINITY,99999];if(0!=(b.K&240)==!1||h[0]<this.j.Ff){if(g=this.j.wf)g=!(0<a.v.length&&Ib(a.v))&&!a.Ba;if(g)return Pb(this.c,a,b,e,h,!0,d),[!0,c,!0];Pb(this.c,a,b,e,h,c,d);return[!1,c,d]}if(g=this.j.xf&&0!=(b.K&1)&&h[0]<this.j.Gf)if(0!=(b.K&1)&&0<a.v.length&&Ib(a.v))for(g=!1,n=0;4>n;n++)a.O[n]&&((p=a.O[n],p.D)?0==(p.D.K&
1)||!this.Rd(p.f,p.D.k,e)||0<p.v.length&&Ib(p.v)||(Pb(this.c,p,p.D,e,1,!0,!1),g=!0):g=!0);else g=!1;return g?(Pb(this.c,a,b,e,h,c,d),[!0,!0,d]):[!0,c,d]};
k.Rd=function(a,b,c){if(this.sj&&0<a[0]&&12>a[0]){var d=!1,e=this.c.Bg,h=b.B,g=b.q;5>a[0]&&(factor_=0.4);5<=a[0]&&(factor_=0.9);a=-Math.min(0.7,Math.sin(q.ia(this.c.l.Cb()*factor_)));d=(d=(d=(d=(d=(d=(d=(d=d||q.t.bb(e,q.t.normalize([h[0],h[1],h[2]]))<a)||q.t.bb(e,q.t.normalize([g[0],h[1],h[2]]))<a)||q.t.bb(e,q.t.normalize([h[0],g[1],h[2]]))<a)||q.t.bb(e,q.t.normalize([g[0],g[1],h[2]]))<a)||q.t.bb(e,q.t.normalize([h[0],h[1],g[2]]))<a)||q.t.bb(e,q.t.normalize([g[0],h[1],g[2]]))<a)||q.t.bb(e,q.t.normalize([h[0],
g[1],g[2]]))<a)||q.t.bb(e,q.t.normalize([g[0],g[1],g[2]]))<a;if(!d)return!1}return this.l.Rd(b,c)};k.gi=function(a,b){var c=b.Eg,d=b.X,e=[0.5*(d.A[0]+d.H[0]),0.5*(d.A[1]+d.H[1])],h=c[0]>=e[0],c=c[1]>=e[1];h?d.A[0]=e[0]:d.H[0]=e[0];c?d.A[1]=e[1]:d.H[1]=e[1];return h?c?[1]:[3]:c?[0]:[2]};
k.Hl=function(a,b,c,d){if(null==a||a.f[0]>b.Te&&b.na)return[!1,c,d];var e=a.D;if(null==e)return[!1,c,d];if(0!=(e.K&2))if(null==a.na)d||(b=a.u,e=a.f,b=vb(b.c,b.yh,{ua:e[0],Va:e[1],Wa:e[2]},null,void 0),a.na=new Rb(this.c,b,!0));else{if(!0==a.na.T())return b.sb={D:b.D,na:b.na,ld:b.ld},b.D=e,b.na=a.na,b.ld={A:b.X.A.slice(),H:b.X.H.slice()},[!0,c,d]}else return b.D=e,[!0,c,d];return[!1,c,d]};
k.Il=function(a,b,c,d){if(null==a||a.f[0]>b.Te)return[!1,c,d];a=a.D;if(null==a)return[!1,c,d];b.D=a;return[!0,c,d]};Xa.prototype.quad=function(a,b,c){var d="";for(i=a;0<i;i--){a=0;var e=1<<i-1;0!=(b&e)&&(a+=1);0!=(c&e)&&(a+=2);d+=a}return d};Xa.prototype.msDigit=function(a,b){return((a&3)<<1)+(b&1)};function Bc(a){for(a=a.toString(16);8>a.length;)a="0"+a;return a}Xa.prototype.ppx=function(a,b){return Bc(b<<28-a)};Xa.prototype.ppy=function(a,b){return Bc(268435456-(b+1<<28-a))};
Xa.prototype.Ok=function(a,b,c){if("string"==typeof c)if(-1!=c.indexOf("quad")){b="(function(lod,x,y){"+c.replace("quad","return this.quad")+"})";try{var d=eval(b).bind(this);return d(a.ua,a.Va,a.Wa)}catch(e){return c}}else if(-1!=c.indexOf("ms_digit")){b="(function(x,y){"+c.replace("ms_digit","return this.msDigit")+"})";try{return d=eval(b).bind(this),d(a.Va,a.Wa)}catch(h){return c}}else{if(-1!=c.indexOf("alt"))return(a=/\(([^)]*)\)/.exec(c))&&a[1]&&(a=a[1].match(/([^,]+)/g),0<a.length)?a[b%a.length]:
c;if(-1!=c.indexOf("ppx")){b="(function(lod,x){"+c.replace("ppx","return this.ppx")+"})";try{return d=eval(b).bind(this),d(a.ua,a.Va)}catch(g){return c}}else if(-1!=c.indexOf("ppy")){b="(function(lod,y){"+c.replace("ppy","return this.ppy")+"})";try{return d=eval(b).bind(this),d(a.ua,a.Wa)}catch(f){return c}}else return c}else return c};
function vb(a,b,c,d,e){b=b.replace(/ /g,"");b=q.il(b,{lod:c.ua,x:c.Va,y:c.Wa,sub:d,here_app_id:"abcde",here_app_code:"12345"},a.Ok.bind(a,c,a.ji));a.ji++;return(e=-1!=b.indexOf("://"))?b:a.Ei+b}function Ya(a,b){this.parse(b)}Ya.prototype.parse=function(a){this.Lg=a.description||"";this.la=a.boundLayers||[];this.ob=a.freeLayers||[];this.za={};if(a.surfaces)if(a=a.surfaces,Array.isArray(a))for(var b=0,c=a.length;b<c;b++)this.za[a[b]]=[];else this.za=a;this.za=JSON.parse(JSON.stringify(this.za))};
Ya.prototype.eb=function(){return{description:JSON.parse(JSON.stringify(this.Lg)),surfaces:JSON.parse(JSON.stringify(this.za)),freeLayers:JSON.parse(JSON.stringify(this.ob))}};
function Cc(a,b,c){this.j={c:null,yf:900,Bf:360,Ef:60,Ff:1.1,Gf:2.2,zf:6,xm:1,zm:1,ym:2,uh:!1,vh:2,Jb:4,Cf:!1,wf:!0,xf:!0,th:!0,Af:!1,$f:!0,Zf:!1};this.Yc={};this.Ya(b);this.kj=a;this.dk=c;this.Tb=new Dc({});this.U=this.Wf=!1;this.cc=[];this.uf=0;this.od=null!=q.ui?new q.ui(this):null;this.Df=this.c=null;this.o=new Ja(this,this.kj,0,this.j);this.al=new E(this.o);this.Pa=window._mproj4_;q.Sb.$b();Ec(this,this.j.c);window.Jh(this.Ch.bind(this))}
function Ec(a,b){null!=a.c&&(a.c.n(),a.c=null,a.Df=null,a.yb("map-unloaded",{}));null!=b&&q.ne(b,function(a){this.c=new Xa(this,a,b,this.j);this.Df=new U(this.c);this.Ya(this.Yc);this.j.F&&(this.c.kb(this.j.F),this.j.F=null);this.j.si&&(this.c.sc(this.j.si),this.j.si=null);this.yb("map-loaded",{})}.bind(a),function(){}.bind(a))}k=Cc.prototype;k.fb=function(){return this.c};k.ce=function(){return this.o};k.de=function(){return this.al};k.df=function(){return this.Pa};
k.Of=function(a,b){if(!0!=this.U&&null!=b)return this.uf++,this.cc.push({yk:a,me:b,f:this.uf}),function(a){this.removeListener(a)}.bind(this,this.uf)};k.yb=function(a,b){for(var c=0;c<this.cc.length;c++)this.cc[c].yk==a&&this.cc[c].me(b)};k.removeListener=function(a){for(var b=0;b<this.cc.length;b++)if(this.cc[b].f==a){this.cc.splice(b,1);break}};q.im=function(){return"1.65"};
q.Cg=function(){q.Sb.$b();var a=document.createElement("canvas");if(null==a)return!1;a.width=1024;a.height=768;if(null==a.getContext)return!1;var b=null;try{b=a.getContext("webgl")||a.getContext("experimental-webgl")}catch(c){return!1}return b?!0:!1};q.wi=function(a,b){a="string"!==typeof a?a:document.getElementById(a);return q.Cg()?new Fc(a,b):null};function Fc(a,b){this.s=new Cc(a,b,this);this.c=this.s.fb()}k=Fc.prototype;k.fb=function(){return this.s.Df};k.ce=function(){return this.s.de()};
k.df=function(){return this.s.df()};k.Of=function(a,b){this.s.Of(a,b)};k.yb=function(a,b){this.s.yb(a,b)};q.MapCore=q.wi;Fc.prototype.getMap=Fc.prototype.fb;Fc.prototype.getRenderer=Fc.prototype.ce;Fc.prototype.on=Fc.prototype.Of;Fc.prototype.callListener=Fc.prototype.yb;q.getVersion=q.lm;q.checkSupport=q.Cg;Cc.prototype.Ya=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.Ia(b,a[b])};
Cc.prototype.Ia=function(a,b){"pos"==a||"position"==a||"view"==a?this.fb()?("view"==a?this.fb().sc(b):this.fb().kb(new R(this,b)),this.Yc[a]&&delete this.Yc[a]):this.Yc[a]=b:"map"==a?this.j.c=q.ni(b):(0==a.indexOf("map")&&(this.Yc[a]=b,null!=this.fb()&&this.fb().Ia(a,b)),0==a.indexOf("renderer")&&this.ce().Ia(a,b))};Cc.prototype.cb=function(a){if("map"==a)return this.j.c;if(0==a.indexOf("map")&&null!=this.fb())return this.fb().cb(a,value_);if(0==a.indexOf("renderer"))return this.ce().cb(a,value_)};
function Dc(a){this.ug=1073741824;this.Tg=440401920;this.te=4;this.Me=45;this.Sd=12E5;this.zg=180;this.xg=this.Sd;this.Ag=-90;this.Fb=14;this.yg=90;this.wg="aboveTerrainByPixelSize";this.eh=8;this.fh=32;this.ie=1024;this.tb="./skydome.jpg";0.8>window.MelownScreenScaleFactor_&&(this.ie=512,this.tb="./skydome-small.jpg");this.Vd=[0.8,0.8,0.8];this.Dg="observer";this.c=null;if(null!=a&&(this.c=a.map,null!=a.cacheSize&&(this.ug=a.cacheSize),null!=a.gpuCacheSize&&(this.Tg=a.gpuCacheSize),null!=a.numThreads&&
(this.te=a.numThreads),null!=a.cameraFOV&&(this.Me=a.cameraFOV),null!=a.cameraVisibility&&(this.Sd=a.cameraVisibility),null!=a.cameraMinDistance&&(this.zg=a.cameraMinDistance),null!=a.cameraMaxDistance&&(this.xg=a.cameraMaxDistance),null!=a.cameraMinTilt&&(this.Ag=a.cameraMinTilt),null!=a.cameraMaxTilt&&(this.yg=a.cameraMaxTilt),null!=a.cameraConstrainMode&&(this.wg=a.cameraConstrainMode),null!=a.gridEmbeddingFactor&&(this.eh=a.gridEmbeddingFactor),null!=a.gridMinTileSize&&(this.fh=a.gridMinTileSize),
null!=a.skydomeTexture&&(this.tb=a.skydomeTexture),null!=a.hitTextureSize&&(this.ie=a.hitTextureSize),null!=a.heightLod&&(this.Fb=a.heightLod),null!=a.controlMode&&(this.Dg=a.controlMode),null!=a.controlInertia))for(var b=0;3>b;b++)this.Vd[b]=a.controlInertia[b]}
Dc.prototype.ja=function(){var a={};a.cacheSize=this.ug;a.gpuCacheSize=this.Tg;a.numThreads=this.te;a.cameraFOV=this.Me;a.cameraVisibility=this.Sd;a.cameraMinDistance=this.zg;a.cameraMaxDistance=this.xg;a.cameraMinTilt=this.Ag;a.cameraMaxTilt=this.yg;a.cameraConstrainMode=this.wg;a.gridEmbeddingFactor=this.eh;a.gridMinTileSize=this.fh;a.skydomeTexture=this.tb;a.hitTextureSize=this.ie;a.heightLod=this.Fb;a.controlMode=this.Dg;a.controlInertia=[this.Vd[0],this.Vd[1],this.Vd[2]];return a};
Cc.prototype.Ch=function(){null!=this.c&&this.c.update();this.yb("tick",{});window.Jh(this.Ch.bind(this))};
Melown.Utils = {};
Melown.Utils.stampCounter_ = 0;

Melown.Utils.stamp = function(obj_) {
    obj_.melownStamp_ = obj_.melownStamp_ || ++Melown.Utils.stampCounter_;
    return obj_.melownStamp_;
};

Melown.Utils.splitWords = function(str_) {
    return str_.trim().split(/\s+/);
};

Melown.Utils.validateBool = function(value_, defaultValue_) {
    if (typeof value_ === "boolean") {
        return value_;
    } else {
        return defaultValue_;
    }
};

Melown.Utils.validateNumber = function(value_, minValue, maxValue, defaultValue_) {
    if (typeof value_ === "boolean") {
        return Melown.clamp(value_, minValue, maxValue);
    } else {
        return defaultValue_;
    }
};

//Melown.Utils.dragging_ = false;

Melown.Utils.hasClass = function(element_, name_) {
    if (element_.classList !== undefined) {
        return element_.classList.contains(name_);
    }
    var className_ = Melown.Utils.getClass(element_);
    return className_.length > 0 && new RegExp('(^|\\s)' + name_ + '(\\s|$)').test(className_);
};

Melown.Utils.addClass = function(element_, name_) {
    if (element_.classList !== undefined) {
        var classes_ = Melown.Utils.splitWords(name_);
        for (var i = 0, li = classes_.length; i < li; i++) {
            element_.classList.add(classes_[i]);
        }
    } else if (!Melown.Utils.hasClass(element_, name_)) {
        var className_ = Melown.Utils.getClass(element_);
        Melown.Utils.setClass(element_, (className_ ? className_ + ' ' : '') + name_);
    }
};

Melown.Utils.removeClass = function(element_, name_) {
    if (element_.classList !== undefined) {
        element_.classList.remove(name_);
    } else {
        Melown.Utils.setClass(element_, ((' ' + Melown.Utils.getClass(element_) + ' ').replace(' ' + name_ + ' ', ' ')).trim() );
    }
};

Melown.Utils.setClass = function(element_, name_) {
    if (element_.className.baseVal === undefined) {
        element_.className = name_;
    } else {
        element_.className.baseVal = name_;
    }
};

Melown.Utils.getClass = function(element_) {
    return element_.className.baseVal === undefined ? element_.className : element_.className.baseVal;
};

Melown.Utils.preventDefault = function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};

Melown.Utils.disableTextSelection = function() {
    window.addEventListener("selectstart", Melown.Utils.preventDefault);
};

Melown.Utils.enableTextSelection = function() {
    window.removeEventListener("selectstart", Melown.Utils.preventDefault);
};

Melown.Utils.disableImageDrag = function() {
    window.addEventListener("dragstart", Melown.Utils.preventDefault);
};

Melown.Utils.enableImageDrag = function() {
    window.removeEventListener("dragstart", Melown.Utils.preventDefault);
};

Melown.Utils.disableContexMenu = function(element_) {
    element_.addEventListener("contextmenu", Melown.Utils.preventDefault);
};

Melown.Utils.enableContexMenu = function(element_) {
    element_.removeEventListener("contextmenu", Melown.Utils.preventDefault);
};

Melown.Utils.getSupportedProperty = function(properties_) {
    var style_ = document.documentElement.style;

    for (var i = 0, li = properties_.length; i < li; i++) {
        if (properties_[i] in style_) {
            return properties_[i];
        }
    }

    return false;
};

Melown.Utils.TRANSFORM = Melown.Utils.getSupportedProperty(
            ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);


/**
 * @constructor
 */
Melown.Autopilot = function(browser_) {
    this.browser_ = browser_;
    this.trajectory_ = [];
    this.flightDuration_ = 1;
    this.flightTime_ = 0;
    this.trajectoryIndex_ = 0;
    this.finished_ = true;

    this.center_ = [0,0,0];
    this.orientation_ = [0,0,0];
    this.viewHeight_ = 0;
    this.fov_ = 90;
};

Melown.Autopilot.prototype.flyTo = function(position_, options_) {
    var map_ = this.browser_.getCore().getMap();
    if (!map_) {
        return;
    }
    
    options_ = options_ || {};
    var trajectory_ = map_.generateTrajectory(map_.getPosition(), position_, options_);
    this.setTrajectory(trajectory_, options_["samplePeriod"] || 10, options_); 
};

Melown.Autopilot.prototype.flyTrajectory = function(trajectory_, sampleDuration_) {
    var options_ = {};
    this.setTrajectory(trajectory_, sampleDuration_, options_);
};

Melown.Autopilot.prototype.cancelFlight = function() {
    this.finished_ = true;
};

Melown.Autopilot.prototype.setTrajectory = function(trajectory_, sampleDuration_, options_) {
    if (trajectory_ == null || trajectory_.length == 0) {
        return;
    }

    this.speed_ = options_["speed"] || 1.0;
    this.lastControlMode_ = this.browser_.getControlMode().getCurrentControlMode(); 
    this.browser_.getControlMode().setCurrentControlMode("disabled");

    this.trajectory_ = trajectory_;
    this.sampleDuration_ = sampleDuration_;
    //this.
    
    this.browser_.callListener("fly-start", { "startPosition" : this.trajectory_[0],
                                              "endPosition" : this.trajectory_[this.trajectory_.length - 1],
                                              "options" : options_
                                             });
    
    this.timeStart_ = performance.now();
    this.finished_ = false;
};

Melown.Autopilot.prototype.tick = function() {
    if (this.finished_ || !this.trajectory_) {
        return;
    }

    var map_ = this.browser_.getMap();
    if (!map_) {
        return;
    }
    
    var time_ = performance.now() - this.timeStart_;
    var sampleIndex_ =  Math.floor((time_ / this.sampleDuration_)*this.speed_);
    var totalSamples_ = this.trajectory_.length - 1; 

    if (sampleIndex_ < totalSamples_) {
        //interpolate
        map_.setPosition(this.trajectory_[sampleIndex_]);        

        this.browser_.callListener("fly-progress", { "position" : this.trajectory_[sampleIndex_],
                                                     "progress" : 100 * (sampleIndex_ / totalSamples_)
                                                    });

    } else {
        map_.setPosition(this.trajectory_[totalSamples_]);        
    } 
    
    if (sampleIndex_ >= this.trajectory_.length) {
        this.browser_.callListener("fly-end", { "position" : this.trajectory_[totalSamples_] });

        this.browser_.getControlMode().setCurrentControlMode(this.lastControlMode_);
        this.finished_ = true;
    } 
};

// Basic class for requesting ROI servers. It hasn't any UI. Eg. Explore Bar
// class has this class as ancestor.

/**
 * @constructor
 */
Melown.Rois = function(roiServers_) {
    this.roiServers_ = roiServers_;
};

/**
 * roisAtPosition
 * Request rois intended for specific position
 * @param position_ position array 
 * @param count_ number of requested rois
 * @param clb_ callback
 * @return Response promise object (if ES6 is supported otherwise null)
 */
Melown.Rois.prototype.roisAtPosition = function(position_, count_, clb_) {
    // TODO request ROI server
    // ROI gravity must be defined before implementation
};
/**
 * @constructor
 */
Melown.UIControlCompass = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("compass",
      '<div id="melown-compass">'

        + '<div id="melown-compass-frame">'
            + '<img id="melown-compass-compass" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODRDNjZFNDJCQjNCMTFFM0IyN0ZCQTZFQTAwNzEzNDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODRDNjZFNDNCQjNCMTFFM0IyN0ZCQTZFQTAwNzEzNDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NEM2NkU0MEJCM0IxMUUzQjI3RkJBNkVBMDA3MTM0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NEM2NkU0MUJCM0IxMUUzQjI3RkJBNkVBMDA3MTM0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgg3VBcAAAzUSURBVHja7F1bbBTXGf7tNdiAbTAXYxscMJe04GDLwVwKNDgNhaogRB+4qKgtzUMrISEhIXjiLsT9gQd4oQ8lPFRtEdACoWCCuASRBCelJBASEnM1xsbgGwYbg03PN/4PHI93vTO7s7tnxv6kX7Pe9Y7H/zf/5fxnzn/iXr16Rd3QA3HdZHST0Q2XktFTSLKQNCGpQlKEJLL4WFqFvGRp5uMTIfVCaoQ08PvdZNgEFJ8uZIiQQQ6fu0rIfSEPmaBuMvygv5CRQrJN78cLyeLPQc4AIX2ZsB5Cegn5qZBqIff47oc8F1In5DErH5+XswWpwHdK+fMuTQYUOUrIaJPy3xLyEyYnV0iGQ3+vQsg1Vv73Qu6ayPlByI9CGrsSGf34bs5SCMgRksfKL4jSdVxmcr4WckshBhb0nZBaL5ORysrO5J+ThExmmRBjD3FJyBdCPhfSxO89YLLqvUQGsp18IcP5Z2RD04X8jC1EJ8AiPhNyjrMx4LaQK0Ja3E7GGBaZon4gZCbHBZ2BeHJKyCdKSnydxXVk+Nj1ZHFMeEfIbCGFLhuHfSnkYyFXOaYgnpREykoiQQbSz2lMCFLS+WwNbkaxkAOcAoOIC5w2a03GOCVVRXa0UMO4EE48+QdnXzIV/kZXMibwoA0WMU/Ib8mb+JuQf7GF3GO3pQ0Z8ZwZDeZMaYmQIvI2zgrZxxlXJWdgrbEmA0T8nOMEyPijBmOGaAEW8VcmA/Hj03AJCYeMOA7UKOYNFfJ7IeOpa+ErIfuFlFFbERKB/VU4d3aomMhEoID3oVUijhw5QqWlpV4hYzz/77LCPDFcNxMK3uULQJ3pdzzCtoSmpiaqqanxknXksw7SWCfvRpOMd7i0gTL2n63EiKqqKrp+vW3w2qtXL3r27JnX3BV08CfWyXDWUcTJgCW8zenrEqtmWVlZSSUlbRlg7969qbGxkTyIiawTH+soLZJk4Hen8OtfC3nfikuSBMjXHrUMifdZN8Tpvq2bPcEm8yh7j7E6oNu8eTNt3LjRIEMS0LdvXzp27BhdvnyZfD6f8RkIeu+99ygvL88LhEA3mKS6zjr73GkyQICc/kStqaedq+vTp89ry8jNzTVIAl68eEFPnz41iEpOTvaKdfRkHe1WdHfdKTJ8fMJ4/iP5wVJX3OX9+vVrRwaC+KFDhwwrgMAiBg4cSCNGjGj3ux7KsKCrv7DubpCFSm+8xRMDKAIGrb6WlZXRkydt8zJwQy9fvqT4+HhasmQJZWVlUWJiIjU0NNCdO3fo1q1brtEuLLi52dbTPjMV3eU7YRmpnKolKoGpUyQlJb2OD7AAKD09Pd1wTyDFjbh48SJduHCBVq1aZfervxLyLesQcaQ+HDJy+TiDLE4Mwf3gLgLGjh1LR48epefPnxvpbGtrK8XFxdH69euNoxusYefOnXTu3Dk6cOBAKKcoZN19zLr8LFQy4Mjx8EAKn9AS1NR1zpw5rnX6sIZNmzbRw4cPacOGDTRgwIBQTwXdnVd0WhsKGXJSqIhszFmDjOPHj9OlS5deB2vI9OnTKSMjwzXWAIsGpk2bRrNnzw7nlG+xDo+yTgOmuoGqtkkcI3DcSG0PlFkGLEOmrPL1yJEjKS0tzTXWYATM1FTDPYVhFRKojK6ltseA/kMBHpQLZBly6nSyXSJk3IC4KVNSrUFixYoVThBBrEPo8iy1PUX5jZ3UdjR/Nok8DgTn+fPndyDCAfdkxiTW6Wg7MaM/H3MozPq8zsBYaNu2bXTixImO+bxwT2vWrHH6T05knZayjqutWIZ0S3letwZ/RADLly93yj2ZkWfScVDLyGaScruSNUhMnjyZ5s6dG6lLgE7/zTouCUaGrNZhxFjgNWvYsmULPXr0KODvoFi5du3aSF5GAev2Juu6oTMy0k3ZVJewBtU9oXQTYbzNZKQHI2NIZz7Ni9aguqd58+ZF47JGKLq+2RkZeMLB5/Z4YccaouSezHHDR37WK6pkyAkj1KMyuoI1RNk9SWSwjstY583+yEg2jTNchbq6OsMaiouLbX0viu7JPJYrY51X+xtnpJnihmtw+vRpY9xgl4gouycVQ00672AZqXwc4CZr2Lp1K506dSqk70fZPfmrcqQGIiOFj33dYg1wS9XVoS3hjpF7IpOOUwKRkWSKHdoCAfrgwYMhfz+G7skcn5PUN+P9ZFM9dLcISUSoU7cxdE8SiSaddyDDx8deumdMAOZLMAeBCqsdTJo0KZbuyWwZvmBkaLsGD8Faxohly5YZU7l79uyxTAgIXL16tQ7/yshgZMhVN9U6EgH3JLOmCRMmGKksMGbMGMuEgMDMzExtXbBKxks+3tPdPZmDrxVCVAI1gFwt1BKMDO2aZG3fvr2de/J3d3dGiD8CY4yGYGRIEl7odNWoNZ08edLS3R2IEA3d03N/N75KhiRBm5UsqL5iTGHn7gYhixYt0tU9mS2jKdCgD8+BDtIpgCNOyOqrlbvbXB7R0D1JyFYXdYHIkKseH+ninuR8hJW721weARF4wkPT7OmRSecdyJD9lcrd5J78FQtBHr6jcRpbbtJ5BzKkH6t1i3vyZw34fQ1jhBm1Jp13IEMGcLRfQHPFjFi7p8LCQr+Kdak1SFSwjjtkruY58CoO4tdiQYbqnvDkur/ShYutQeIajy+qzB+YybjPZGCE+EEs3dPSpUtp6NChnVoD5iQQpAcPHkwuwk1F152S8ZCPP8TSPRUUFLQbK5itAfMRKINrUH0NBTdMug5Ihgwot6mt72tBLNzTunXrjLkKKB8kgAzVGhAbYjwfESous247BG9/ZAAoFGazbyuIlXtCCWTHjh1UW1vrBWuQwGLLVgpQjPVHRimT8XU0ru78+fPt3NOsWbNo5cqVdObMGa9Yg4orio4tkSHLIVikjU7IEVujgRVDCMrSPU2dOpUWLFjgNWuQuMQ6pUAlp0DLyBDA8fDzF5EkA9Omcv0csHv3bi9ag0QJu6iAyVEgMn5kMrAyEwstHX8QGosZ1aVbsu2RbtaARmXoHIeWG3KtonxtA3BLFxXd2iKjkesnaN7yqdNkwD1hVakZOloDGgqADNwsUpBsFBUV0cyZlnsnQ4dNrNNGu2QA3zEZZ4X8ghzsX252T5gMgjVEcMVQyMDa9YULF7Z7D60rHj+23PD5LusQ+L6zX0wIUsx6wK/RoP3DSLgnrCrFKDpCa+hCAtbGo6UGjuh3guQCDWhGjRpldH2Ai0LDGouA7p6wLmtCJUPWUTL5hFgcWOiUe4I1YJ21w8t7HQEGnGhRAaDfCa4bloyH50AGYobFbnJfsu6kLikcMup5xDhcyIlwyZDuSUdrkGUXjPplPywZrMeNG2e8J5MMtc1fEEBnmO++QxY2RbHSc+iKciwOxz2h/oQ7bteuXdoRAeTk5NCwYcOMjA6Bu7y8nPbt22dYR0JCArW0tD3MkZKS0q6IGQDFiu7+Z+XvW+nEhitAWzd0FEOfH5RI8+26JwQ9h/pwOIr6+nqjGRnu9uzsbKMznIobN24Y1w8CJNA5LkiycYV11cq6a3GKDOITysfYDzAxlvsU9ujRI5TGWVHB7du3jZIMXBDiAO5+dI9bvHix0bAMzczMZARBM73Za6OcbOxGY6cXOlwaOovhMXbcFn8gj+Lw4cPGHMmUKVNo7969NGPGDMNiECdAThB8JOQIjytOkI1m9Xb61OGkspMYOoud8SoZaiNktc2fBSLOsG6IQtjGwW7TQOTJshPlPnJwIw+doHaTw9y6xZnEEtZJC+vIdsP3hBCu9SrHi+FskiB0vNcso6KiwniNJxQt4CvWRQMPBa6G8ncTQrze/9KbRTX7+Tz5XiEDHeMsuCQ1c9rPI+xK1k1og80wNjOBRWAzk4HUvZkJaiOYqrxAYewu4+Q2P5mcYXWlbX4+YouI+TY/KiFdbQOsc0xEHWm0AZYKuTUc4sdvhCzyKBF/x1CE2hYXabc1nIruTRM1IoOo43aiC4T80uVE4DHGf5LLthOVMG+0C4vBXLobN9o9zhbgyo12VahbUKMrwAwWN2xB/QmLXH/n2i2ozVZi3py9iFNi3drvlXKKepY8uDm7CixBzeXxCIAhLjbUmqjB2ASuBw+Z4XEaOYWH8QOmSuujdRHRJON1tYEzrExlnJLD1jOWotfCFQ8hf8t3/S1lnPCAM6eo7+wYCzIkUNsaRe3btsZzPAFZI9iSnFq0U8F3+k1W9l3TQA2pKh4wi9nS61iSoaI/x49sP6N7uQvaEE6bMeOYzAlBmpIM3OW7GQG3gUfHSD/v05tZN/Mo+R6T81gHJehChopkLq2AhEEOn7uKSakkP+sjuskIjp5MUBonASkc/HtypibbBLWwNHMQfsLBt4YV36z7P+oGMroMusnQCP8XYACgtQtbAKLiKwAAAABJRU5ErkJggg==">'
        + '</div>'

        + '<div id="melown-compass-frame2">'
            + '<img id="melown-compass-compass2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABG9JREFUeNrtnM9LFGEcxkeEPCQVmbkh7EXoEgW6noIQzQwKoQ5Lkgh7SA8iddlCQfAQFApdghAxooJCsEMe9JAEek8i81YQCIEYQvgHZM9L37Fpmpl9Z3d+rs8DDw7unuaz3+ddX+d9DIOiKIqiKIqiKIqiKIqiKIqiKIqiKMpTQ0NDyqNwTq7/MRUNAKsfwL2EER+MLHxBru/BA4QR3zR0wY/lWmmEMKKHcVh+tsEv5PoGPE4Y0cP4LD9b4AW57oC/whvwB3gZfgN3886FG1EmjAZ41WEa6uAm+DTcyLsXPAz11fWkDUYtvAVPwHfgAnwdbmVMhQtjDj4jN3gNPiTXF+E8fAsuwvfhQScIuVwuMusK762H69IGYwY+LwDew+3wcZkOQ2fhThoMvK8TnkrjZEzCV+RGF2XhXoE/wuvwJ7jGK5aSAkOm4Qm8DTemEcYYfNNtCnTWiCTAkGn4Bu/B+bSuGcPwF3gJfg1Pww/l661uLMQGwzINe+L5tH+1PSpbIOdkG0TtRWWSDsM2Dco/UhlPQSpqGA7TsJfqeEorDLjHNg3pj6cUwjgCzzpAYDxFDENNw6YLCOU+Uggfhtc0mH5LAuHDKDUNyjtwhgTCg6EzDab7effDg6EzDYynkGH4mQbGU4gw/EwD4ykkGMfgZz4hMJ5CgHEV/l4GCMZTgDDUNDwvAwLjKeD1odxp2I8nP/92JQx3P6oAwn48EUYw64N5U3+VG09+H0ggDOc1woymn/Bl2WH1A2KhnKdDCON/WxfrgvzurA8gCmAzYVQOwxpPi7bXdIEUyn1uijDc46nZ4T2lgCxW8hAbYfz1U69PtwYQN4AE4BNGT6lPtwaQQqWPdxLGn93XzVKfbgff1QVI6cOY1Ywnt+2RkgApPRh+48m+PaJA9Ab1FPpBhuEnnpw2Cxd1I40qDUM3npymoRDG+YyDCsMaT0thTANh6MGwxtMunA1jGghDD4Y1ngY1pkH9T+JUFMfIDhoMazy9g2s8pmHHug1OGMHCcIunBvilwzRkoj5geZBgOMXTNXgrjGkgDHcYl2zxdAJ+FeY0EIYziHrLQRUVT7ejmAbCcIZhPbq1G9U06MIo97RuGkF0ejy50Z9LwDlwuekZOSB6QQ6MZuUAaVXGU+TT4BNGixydnpaj1EtytHq4GuPJPEPXF/HBSkcYOmUCUjowVo3xNK8OM8YBwgNGjdRqrEvNxorUbhTldVXHMVlN8aSmIR8XBDsMjymolSKadimmMaSoZqZa4mnePNqbMBiDUr1UlCqmvFQzGVLVtCbXqsJpLu3xtG1vHYgThMMUtEopWUFKyiaktKzWVmamys1G0xxPU04H3RMAo1Fq+Zqkps8OaFVq/aww0vt3hleDWQJgdEth5bIUWG5IoWWHvL5gNgJZYVABy2PRHpfKV0MqYNts1bC8eRHCGJEyZEPKkbvYwRsfjAGpCTdkGyRLAPHB6JUCfU5DAmDkpJ+XN4miKIqiKIqiKIqiKIqiKIqiKIpKpn4DKrVAiBFUfdUAAAAASUVORK5CYII=">'
        + '</div>'

        + '<div id="melown-compass-frame3">'
            + '<img id="melown-compass-compass3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABG9JREFUeNrtnM9LFGEcxkeEPCQVmbkh7EXoEgW6noIQzQwKoQ5Lkgh7SA8iddlCQfAQFApdghAxooJCsEMe9JAEek8i81YQCIEYQvgHZM9L37Fpmpl9Z3d+rs8DDw7unuaz3+ddX+d9DIOiKIqiKIqiKIqiKIqiKIqiKIqiKMpTQ0NDyqNwTq7/MRUNAKsfwL2EER+MLHxBru/BA4QR3zR0wY/lWmmEMKKHcVh+tsEv5PoGPE4Y0cP4LD9b4AW57oC/whvwB3gZfgN3886FG1EmjAZ41WEa6uAm+DTcyLsXPAz11fWkDUYtvAVPwHfgAnwdbmVMhQtjDj4jN3gNPiTXF+E8fAsuwvfhQScIuVwuMusK762H69IGYwY+LwDew+3wcZkOQ2fhThoMvK8TnkrjZEzCV+RGF2XhXoE/wuvwJ7jGK5aSAkOm4Qm8DTemEcYYfNNtCnTWiCTAkGn4Bu/B+bSuGcPwF3gJfg1Pww/l661uLMQGwzINe+L5tH+1PSpbIOdkG0TtRWWSDsM2Dco/UhlPQSpqGA7TsJfqeEorDLjHNg3pj6cUwjgCzzpAYDxFDENNw6YLCOU+Uggfhtc0mH5LAuHDKDUNyjtwhgTCg6EzDab7effDg6EzDYynkGH4mQbGU4gw/EwD4ykkGMfgZz4hMJ5CgHEV/l4GCMZTgDDUNDwvAwLjKeD1odxp2I8nP/92JQx3P6oAwn48EUYw64N5U3+VG09+H0ggDOc1woymn/Bl2WH1A2KhnKdDCON/WxfrgvzurA8gCmAzYVQOwxpPi7bXdIEUyn1uijDc46nZ4T2lgCxW8hAbYfz1U69PtwYQN4AE4BNGT6lPtwaQQqWPdxLGn93XzVKfbgff1QVI6cOY1Ywnt+2RkgApPRh+48m+PaJA9Ab1FPpBhuEnnpw2Cxd1I40qDUM3npymoRDG+YyDCsMaT0thTANh6MGwxtMunA1jGghDD4Y1ngY1pkH9T+JUFMfIDhoMazy9g2s8pmHHug1OGMHCcIunBvilwzRkoj5geZBgOMXTNXgrjGkgDHcYl2zxdAJ+FeY0EIYziHrLQRUVT7ejmAbCcIZhPbq1G9U06MIo97RuGkF0ejy50Z9LwDlwuekZOSB6QQ6MZuUAaVXGU+TT4BNGixydnpaj1EtytHq4GuPJPEPXF/HBSkcYOmUCUjowVo3xNK8OM8YBwgNGjdRqrEvNxorUbhTldVXHMVlN8aSmIR8XBDsMjymolSKadimmMaSoZqZa4mnePNqbMBiDUr1UlCqmvFQzGVLVtCbXqsJpLu3xtG1vHYgThMMUtEopWUFKyiaktKzWVmamys1G0xxPU04H3RMAo1Fq+Zqkps8OaFVq/aww0vt3hleDWQJgdEth5bIUWG5IoWWHvL5gNgJZYVABy2PRHpfKV0MqYNts1bC8eRHCGJEyZEPKkbvYwRsfjAGpCTdkGyRLAPHB6JUCfU5DAmDkpJ+XN4miKIqiKIqiKIqiKIqiKIqiKIpKpn4DKrVAiBFUfdUAAAAASUVORK5CYII=">'
        + '</div>'

      + ' </div>', visible_);

    var compass_ = this.control_.getElement("melown-compass");
    compass_.on("drag", this.onDrag.bind(this));
    compass_.setDraggableState(true);

    this.image_ = this.control_.getElement("melown-compass-compass");
    this.image2_ = this.control_.getElement("melown-compass-compass2");
    this.image3_ = this.control_.getElement("melown-compass-compass3");
    
    this.lastStyle_ = "";
};

Melown.UIControlCompass.prototype.update = function() {
    var map_ = this.browser_.getCore().getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var value_ = "rotateX("+((pos_[6]+90)*0.7)+"deg) " + "rotateZ("+(pos_[5]-45)+"deg)";

    if (value_ != this.lastStyle_) {
        this.lastStyle_ = value_;
        this.image_.setStyle(Melown.Utils.TRANSFORM, value_);
        this.image2_.setStyle(Melown.Utils.TRANSFORM, value_);
        this.image3_.setStyle(Melown.Utils.TRANSFORM, value_);
    }
};

Melown.UIControlCompass.prototype.onDrag = function(event_) {
    var map_ = this.browser_.getCore().getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getDragDelta();
    var sensitivity_ = 0.8;
    
    var controller_ = this.browser_.controlMode_.getCurrentController();
    
    if (controller_.orientationDeltas_) {
        controller_.orientationDeltas_.push([-delta_[0] * sensitivity_,
                                             -delta_[1] * sensitivity_, 0]);
    }
};


/**
 * @constructor
 */
Melown.UIControlCredits = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("credits",
      '<div id="melown-credits"'
      + ' class="melown-credits">'
      + ' </div>', visible_);

    this.lastHTML_ = "";
    this.credits_ = this.control_.getElement("melown-credits");
};

Melown.UIControlCredits.prototype.getCreditsString = function(array_) {
    var map_ = this.browser_.getCore().getMap();
    var html_ = "";
    var copyright_ = "&copy;" + (new Date().getFullYear());

    for (var i = 0, li = array_.length; i < li; i++) {
        var creditInfo_ = map_.getCreditInfo(array_[i]);
        
        if (creditInfo_["copyrighted"]) {
            html_ += copyright_;        
        }

        if (creditInfo_["url"]) {
            html_ += " <a href='" + creditInfo_["notice"] + "'>" + creditInfo_["notice"] + "</a>";        
        } else {
            html_ += " " + creditInfo_["notice"];        
        }

        if (i + 1 < li) {
            html_ += ", ";        
        }
    }
    
    return html_;
};

Melown.UIControlCredits.prototype.update = function() {
    var map_ = this.browser_.getCore().getMap();
    if (map_ == null) {
        return;
    }

    var html_ = "<ul>";
    var credits_ = map_.getCurrentCredits();
    
    if (credits_["imagery"].length > 0) {
        html_ += "<li>Imagery: " + this.getCreditsString(credits_["imagery"]) + "</li>";
    }
    
    if (credits_["mapdata"].length > 0) {
        html_ += "<li>Map Data: " + this.getCreditsString(credits_["mapdata"]) + "</li>";
    }

    html_ += "<li>3D: MELOWN MAPS";

    if (credits_["mapdata"].length > 0) {
        html_ += ", " + this.getCreditsString(credits_["3d"]) + "</li>";
    }

    html_ += "</ul>";

    if (this.lastHTML_ != html_) {
        this.lastHTML_ = html_;
        this.credits_.setHTML(html_);
    }
};/**
 * @constructor
 */
Melown.UIControlLayers = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("layers",
      '<div class="melown-layers"'
      + '</div>', visible_);
};
/**
 * @constructor
 */
Melown.UIControlFallback = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("fallback",
      '<div class="melown-fallback">'

        + '<div class="melown-fallback-text">'
            + '<p>Melown Maps is <a href="http://get.webgl.org/">WebGL</a> dependent service.</p>'
            + '<p>You can read more about Melown Maps in our <a/ href="https://www.melown.com/maps/about.html">About section</a>.</p>'
        + '</div>'

      + ' </div>', visible_);
};
/**
 * @constructor
 */
Melown.UIControlHolder = function(ui_, html_, visible_) {
    this.ui_ = ui_;
    this.html_ = html_;
    this.elementsById_ = [];
    this.visible_ = (visible_ != null) ? visible_ : true;

    //create holder element
    this.element_ = document.createElement("div");
    this.setVisible(this.visible_);

    //set element content
    this.setHtml(html_);

    //append elemenet to UI
    this.ui_.element_.appendChild(this.element_);
};

Melown.UIControlHolder.prototype.setHtml = function(html_) {
    this.element_.innerHTML = html_;

    var allElements_ = this.element_.getElementsByTagName('*');

    //store all elements with id attribute to the table
    for (var i = 0, li = allElements_.length; i < li; i++) {
        var id_ = allElements_[i].getAttribute("id");

        if (id_ !== null) {
            //store element to the table
            this.elementsById_[id_] = new Melown.UIElement(this, allElements_[i]);
        }
    }
};

Melown.UIControlHolder.prototype.getElement = function(id_) {
    return this.elementsById_[id_];
};

Melown.UIControlHolder.prototype.setVisible = function(state_) {
    this.element_.style.display = state_ ? "block" : "none";
    this.visible_ = state_;
};

Melown.UIControlHolder.prototype.getVisible = function() {
    return this.visible_;
};


//prevent minification
Melown.UIControlHolder.prototype["setHtml"] = Melown.UIControlHolder.prototype.setHtml; 
Melown.UIControlHolder.prototype["getElement"] = Melown.UIControlHolder.prototype.getElement; 
Melown.UIControlHolder.prototype["setVisible"] = Melown.UIControlHolder.prototype.setVisible; 
Melown.UIControlHolder.prototype["getVisible"] = Melown.UIControlHolder.prototype.getVisible; 




/**
 * @constructor
 */
Melown.UIControlLogo = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("logo",
      '<a class="melown-logo"'
      + ' href="https:\\melown.com">'
      + 'Powered by MELOWN MAPS'
      + '</a>', visible_);
};


/**
 * @constructor
 */
Melown.UIControlScale = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("scale",
      '<div class="melown-scale"'
      + '</div>', visible_);
};/**
 * @constructor
 */
Melown.UIControlMap = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("map",
      '<div id="melown-map"'
      + ' class="melown-map">'
      + ' </div>');

    var map_ = this.getMapElement();
    map_.setDraggableState(true);
};

Melown.UIControlMap.prototype.getMapElement = function() {
    return this.control_.getElement("melown-map");
};
/**
 * @constructor
 */
Melown.UIControlZoom = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("zoom",
      '<div id="melown-zoom"'
      + ' class="melown-zoom">'

        + '<img id="melown-zoom-plus"'
          + ' class="melown-zoom-plus"'
          + ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAyOUNBMDJCQjNCMTFFM0JDQjQ5NURBODEzRTcxRTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAyOUNBMDNCQjNCMTFFM0JDQjQ5NURBODEzRTcxRTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDI5Q0EwMEJCM0IxMUUzQkNCNDk1REE4MTNFNzFFOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDI5Q0EwMUJCM0IxMUUzQkNCNDk1REE4MTNFNzFFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pul3mzIAAANGSURBVHja7FlLTxNRGJ0WpNJoDSILDQ9t5NG4w52QVowGF8Z/YDfqyo0/xY0rWeFfYKExAdvYpd2Z4WEaQKILfEQwlNbSeq6em0wmM7cznUeniSc5+RrozHf6zTf3zncm1mq1tF5DXOtB9KTofp9++CQ4DV4GR8ABMAHWwDq4D+6COvgRPJEHx2IxR0mMbRzz0NMZcB681sGxH8B34keEJToN3mOUlZ4CJ8AL4CDYB54Gj1nVKvgN3AY3wSaPrYArEF4JUvQD8Do/n2WlR8Gki3McgXus9CH/9h7CX/ot+gz4ELzCKi6wuqc83Au/wS1wlVdjB3wB8b/8ED0EPuGlvwgugud8XAx+gq/BL+BX8DmE//AiWrTAU3CYlb3JnvUbouffst9F7z+D8EM70e3W6UcUPAPeDkiwxvPeYZ5h5u1oc8lzRRAtkfPYv073jBzzTaCyebeixSYxy5tukctXGBB57jLvLISn3Yi+z7jg803nBCnm1bgfOBKd4caR4s3XDUwzfxrVzjgRPc94I4Q+VvX3HD9n24mO81lCxDEvWbPZ7F96wCh1ZFDtPpXoScYpl1tzEEiyTTRzm8Yt+lmuHlGA1DGjEj3OeD4ioocYx1SiRwyXJgpImnRZik74ONH4OVklVOPWgNWXVMjlctZPQNWq8v+FQsHJ6RMmXZaVrjPWIlLpmkmXZaVr/FUNp9W2q5hcox1W1A4NqyKaK71vGImigCOTLkvRu4zfIyJaTjCfVKJ1xu2IiJY61lWitxg3I9AiIv+GQY+t6Car3eSY303sST2YF0/a2WJFPoOU+Fzd0UZTLBa9rholg562z9M6nZ8Dw+UJGxvMX0GVdafj1grjGg8OEwfMa9ThSLSodJnOzyvtnycXBo6ZT+Qt23l8KgthmVaVcH4Kht0pKDSYR+TbgeDlTnwPgSU6PmKdfEMnKAhUef515ltSfdmtl3eJPkjK5x4WXt5nzScvT0K4po/pOIkh8xbntn6P7SA2jUBcUyPydJ6kqTKnde5PlwwrU1nVw15Fa5r9mwAxhArzcJBXQL5zaWhdfhNgntyzhgneDXTudHrYL4okRI9fpfhxDqEJDhN1Vjsyb7e6hv9vbMPCHwEGAPd0FDaYMbMfAAAAAElFTkSuQmCC">'

        + '<img id="melown-zoom-minus"'
          + ' class="melown-zoom-minus"'
          + ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUREMDE5NURCQjNCMTFFMzhBQzJFQkIxMjY5Q0I0QjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUREMDE5NUVCQjNCMTFFMzhBQzJFQkIxMjY5Q0I0QjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5REQwMTk1QkJCM0IxMUUzOEFDMkVCQjEyNjlDQjRCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5REQwMTk1Q0JCM0IxMUUzOEFDMkVCQjEyNjlDQjRCMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhZ6YaAAAAMZSURBVHja7JlLTxRBEMeHVQ6Ie5BlwWgEA5hwwEAiiSNETIwnLnrzET+Bn8YPYXzc8MTFmCjB4O56INnDJoIRDZt1YPGwIAedWav0P9pMel47j56NVvJPTyY9U7/pVE93Vfe0222t2yyndaEdj+nDh0lDpAIpj/eyfkAtUpNkQGYUhz0RwuMMaYx0toNnt0kfSPW0oHlEp0hFYaRHSBNoT5H60KdKOiR9JX0ibaC18OwO+hhJQl8mncf1CdI8aZo0G+IdFdI6aZX0Dfc+kt7GDc0jN0caxMgukBYxsp0aj/gy6RVGvokPOYwD+iTpGlqGvk26GuPPYIX0jLRL2sdH7EeB5hC4TuonjZLuIRziNg6Xx6Qt0gHppRA6oaFv4DfGcfwgYjj4WYP0EPHNofKik8VFBzCHxP2EgdlOw88g/OphoYsIhxxieCqlxY793IXfUfxeA0NfRLsQ86QLYvPwq7kNVs5lpSti8i0q2l7cgv8ieHyhx9BeSSGOveJ7DtfjftA57CW4nVG8mZsGB4/0MS/oYbQjIZfmJGwWk1HkkkLbs3UiI1vnCw4uKXQB7bmMQNvb3gEv6Lysk0IbcHBJM5deWScf25TNcA/bEK79wjDv4JJC27N0MiiBrut/gC3LCvLIL9BSqRSk76SDSwptokMtKLhp/k73EsrqawKXK/R3QLeCvrVcLicZ0y2By3Ui2p32MjIR9xxcUugm2s8Zgd6WDaIT2pDMcJX23sElhf4iJJ0VxcAVpF8ilxTaQgHFQt6m0tYFHtNva7qJ9g3yNhXWgH+RxxO6jsoPZ8VLiqCX4H9Hk5TO3NKtKtrXKKCkaavwK3IEgjYwCTimnrg9nIBV4c+CfyNsCWEN/22u/DxKIb4b8LMLv2v/VIWJTazlcXZ8B2l+nDH8FJMullqebX0ALSCk+CNuImuOEg7PtYSqpke2z0Ky2Y80n7P2SyHe8U77W58+wL0trxiOCm0nmX4nAXnsx2vYoSk9CXBWosZlFaAAVsdKl9qZiyZJ0Ya0o6dbvbhvYgOfmdMtZdaVh5//odOynwIMAFn66fVJ7Ib5AAAAAElFTkSuQmCC">'

     + ' </div>', visible_);

    var plus_ = this.control_.getElement("melown-zoom-plus");
    plus_.on("click", this.onZoomIn.bind(this));

    var minus_ = this.control_.getElement("melown-zoom-minus");
    minus_.on("click", this.onZoomOut.bind(this));

};

Melown.UIControlZoom.prototype.onZoomIn = function() {
    this.repeat(7, 0.96, 50);
};

Melown.UIControlZoom.prototype.onZoomOut = function() {
    this.repeat(7, 1.04, 50);
};

Melown.UIControlZoom.prototype.repeat = function(count_, factor_, delay_) {
    if (count_ <= 0) {
        return;
    }

    var map_ = this.browser_.getCore().getMap();
    if (map_ == null) {
        return;
    }
    
    var controller_ = this.browser_.controlMode_.getCurrentController();
    
    if (controller_.viewExtentDeltas_) {
        controller_.viewExtentDeltas_.push(factor_);
    }

    setTimeout(this.repeat.bind(this, --count_, factor_, delay_), delay_);
};


/**
 * @constructor
 */
Melown.UIElement = function(control_, element_) {
    this.control_ = control_;
    this.ui_ = this.control_.ui_;
    this.element_ = element_;
    this.events_ = [];
    this.dragBeginCall_ = this.onDragBegin.bind(this);
    this.dragMoveCall_ = this.onDragMove.bind(this);
    this.dragEndCall_ = this.onDragEnd.bind(this);
};

Melown.UIElement.prototype.setStyle = function(key_, value_) {
    this.element_.style[key_] = value_;
};

Melown.UIElement.prototype.getStyle = function(key_) {
    return this.element_.style[key_];
};

Melown.UIElement.prototype.setClass = function(name_) {
    Melown.Utils.setClass(this.element_, name_);
    return this;
};

Melown.UIElement.prototype.getClass = function() {
    Melown.Utils.getClass(this.element_);
    return this;
};

Melown.UIElement.prototype.hasClass = function(name__) {
    return Melown.Utils.hasClass(this.element_, name_);
};

Melown.UIElement.prototype.addClass = function(name_) {
    Melown.Utils.addClass(this.element_, name_);
    return this;
};

Melown.UIElement.prototype.removeClass = function(name_) {
    Melown.Utils.removeClass(this.element_, name_);
    return this;
};

Melown.UIElement.prototype.setHTML = function(html_) {
    this.element_.innerHTML = html_;
};

Melown.UIElement.prototype.getHTML = function() {
    return this.element_.innerHTML;
};

Melown.UIElement.prototype.getElement = function() {
    return this.element_;
};

//prevent minification
Melown.UIElement.prototype["setHtml"] = Melown.UIElement.prototype.setHtml; 
Melown.UIElement.prototype["getHtml"] = Melown.UIElement.prototype.getHtml; 
Melown.UIElement.prototype["getElement"] = Melown.UIElement.prototype.getElement; 
Melown.UIElement.prototype["setClass"] = Melown.UIElement.prototype.setClass; 
Melown.UIElement.prototype["getClass"] = Melown.UIElement.prototype.getClass; 
Melown.UIElement.prototype["setStyle"] = Melown.UIElement.prototype.setStyle; 
Melown.UIElement.prototype["getStyle"] = Melown.UIElement.prototype.getStyle; 
Melown.UIElement.prototype["addClass"] = Melown.UIElement.prototype.addClass; 
Melown.UIElement.prototype["hasClass"] = Melown.UIElement.prototype.hasClass; 
Melown.UIElement.prototype["removeClass"] = Melown.UIElement.prototype.removeClass; 


Melown.UIElement.prototype.setDraggableState = function(state_) {
    if (state_) {
        this.on("mousedown", this.dragBeginCall_);
    } else if (this.dragable_){
        this.off("mousedown", this.dragBeginCall_);
        this.off("mousemove", this.dragMoveCall_, document);
        //this.off("mouseup", this.onDragEnd.bind(this));
        this.off("mouseup", this.dragEndCall_, document);
        this.dragging_ = false;
    }

    this.dragable_ = state_;
    this.dragButtons_ = {
      "left" : false,
      "right" : false,
      "middle" : false
    };
};

Melown.UIElement.prototype.getDraggableState = function() {
    return this.dragable_;
};

Melown.UIElement.prototype.onDragBegin = function(event_) {
    this.dragButtons_[event_.getMouseButton()] = true;

    if (this.dragging_ != true) {
        this.dragging_ = true;
        var pos_ = event_.getMousePosition(true);
        this.lastDragPos_ = pos_;
        this.on("mousemove", this.dragMoveCall_, document);
        this.on("mouseup", this.dragEndCall_, document);
        //this.on("mouseup", this.onDragEnd.bind(this), document);

        Melown.Utils.disableTextSelection();
        Melown.Utils.disableImageDrag();
        //Melown.Utils.disableContexMenu();

        this.fire("dragstart", {
            "clientX" : pos_[0],
            "clientY" : pos_[1]
            });
    }

};

Melown.UIElement.prototype.onDragMove = function(event_) {
    var pos_ = event_.getMousePosition();

    this.fire("drag", {
        "clientX" : pos_[0],
        "clientY" : pos_[1],
        "deltaX" : pos_[0] - this.lastDragPos_[0],
        "deltaY" : pos_[1] - this.lastDragPos_[1],
        "left" : this.dragButtons_["left"],
        "right" : this.dragButtons_["right"],
        "middle" : this.dragButtons_["middle"]
        });

    this.lastDragPos_ = pos_;
};

Melown.UIElement.prototype.onDragEnd = function(event_) {
    this.dragButtons_[event_.getMouseButton()] = false;

    if (this.dragging_ == true) {
        if (!this.dragButtons_["left"] &&
            !this.dragButtons_["right"] &&
            !this.dragButtons_["middle"] ) {

            this.dragging_ = false;
            var pos_ = event_.getMousePosition();
            this.off("mousemove", this.dragMoveCall_, document);
            this.off("mouseup", this.dragEndCall_, document);
            //this.off("mouseup", this.onDragEnd.bind(this), document);

            Melown.Utils.enableTextSelection();
            Melown.Utils.enableImageDrag();
            //Melown.Utils.enableContexMenu();

            this.fire("dragend", {
                "clientX" : pos_[0],
                "clientY" : pos_[1]
                });
        }
    }
};






/**
 * @constructor
 */
Melown.UIEvent = function(type_, element_, event_) {
    this.type_ = type_;
    this.event_ = event_;
    this.element_ = element_;
};

Melown.UIEvent.prototype.getMouseButton = function() {
    switch(this.event_.which) {
        case 1: return "left";
        case 2: return "middle";
        case 3: return "right";
    }

    return "";
};

Melown.UIEvent.prototype.getMousePosition = function(absolute_) {
    switch (this.type_) {
        case "mousedown":
        case "mouseup":
        case "mousemove":
        case "dragstart":
        case "dragend":
        case "drag":

            if (this.element_.getBoundingClientRect == null || absolute_) {
                return [ this.event_["clientX"],
                         this.event_["clientY"] ];
            } else {
                var rect_ = this.element_.getBoundingClientRect();

                return [ this.event_["clientX"] - rect_.left,
                         this.event_["clientY"] - rect_.top ];
            }

    }

    return [0,0];
};

Melown.UIEvent.prototype.getDragDelta = function() {
    switch (this.type_) {
        case "drag":

            return [ this.event_["deltaX"],
                     this.event_["deltaY"] ];
    }

    return [0,0];
};

Melown.UIEvent.prototype.getModifierKey = function(key_) {
    switch (this.type_) {
        case "mouseup":
        case "mousedown":
        case "keyup":
        case "keydown":
        case "keypress":

            switch(key_) {
                case "alt":   return this.event_.altKey;
                case "ctrl":  return this.event_.ctrlKey;
                case "shift": return this.event_.shiftKey;
            }
    }

    return false;
};

Melown.UIEvent.prototype.getKeyCode = function(key_) {
    switch (this.type_) {
        case "keyup":
        case "keydown":
        case "keypress":
        
            if (this.event_.keyCode) {         // eg. IE
                return this.event_.keyCode;
            } else if (this.event_.which) {   // eg. Firefox
                return this.event_.which;
            } else {
                return this.event_.charCode;
            }
    }
    
    return null;
};

Melown.UIEvent.prototype.getDragButton = function(button_) {
    switch(button_) {
        case "left": 
        case "right":
        case "middle":
            return this.event_[button_];
    }

    return false;
};


Melown.UIEvent.prototype.getWheelDelta = function() {
    switch (this.type_) {
        case "mousewheel":

            var delta = 0;

            if (this.event_.wheelDelta) {
                delta = this.event_.wheelDelta / 120;
            }
            if (this.event_.detail) {
                delta = -this.event_.detail / 3;
            }

            return delta;
    }

    return 0;
};

//prevent minification
Melown.UIEvent.prototype["getMouseButton"] = Melown.UIEvent.prototype.getMouseButton;
Melown.UIEvent.prototype["getMousePosition"] = Melown.UIEvent.prototype.getMousePosition;
Melown.UIEvent.prototype["getDragDelta"] = Melown.UIEvent.prototype.getDragDelta;
Melown.UIEvent.prototype["getModifierKey"] = Melown.UIEvent.prototype.getModifierKey;
Melown.UIEvent.prototype["getKeyCode"] = Melown.UIEvent.prototype.getKeyCode;
Melown.UIEvent.prototype["getDragButton"] = Melown.UIEvent.prototype.getDragButton;
Melown.UIEvent.prototype["getWheelDelta"] = Melown.UIEvent.prototype.getWheelDelta;


Melown.UIElement.prototype.on = function(type_, function_, externalElement_) {
    this.addEvent(type_, function_, externalElement_);
};

Melown.UIElement.prototype.once = function(type_, function_, externalElement_) {
    var removeEventCall_ = (function() {
        this.removeEvent(type_, function_, externalElement_);
    }).bind(this);

    var handler_ = function(e) {
        function_(e);
        removeEventCall_();
    };

    this.addEvent(type_, handler_, externalElement_);
};

Melown.UIElement.prototype.off = function(type_, function_, externalElement_) {
    this.removeEvent(type_, function_, externalElement_);
};

Melown.UIElement.prototype.fire = function(type_, event_) {
    var hooks_ = this.events_[type_];

    if (hooks_ != null) {
        for (var hook_ in hooks_) {
            hooks_[hook_](event_);
        }
    }
};

Melown.UIElement.prototype.addEvent = function(type_, function_, externalElement_) {
    var id_ = type_ + "-" + Melown.Utils.stamp(function_)
              + (externalElement_ ? ("-" + Melown.Utils.stamp(externalElement_)) : "");

    var handler_ = function(e) {
//        function_.call(new Melown.UIEvent(type_, this, e || window.event));
        function_(new Melown.UIEvent(type_, this, e || window.event));
    };

    var element_ =  externalElement_ || this.element_;
    element_.addEventListener(this.getEventName(type_), handler_, false);

    if (type_ == "mousewheel") {
        element_.addEventListener("DOMMouseScroll", handler_, false);
    }

    this.events_[type_] = this.events_[type_] || [];
    this.events_[type_][id_] = handler_;

};

Melown.UIElement.prototype.removeEvent = function(type_, function_, externalElement_) {
    var id_ = type_ + "-" + Melown.Utils.stamp(function_)
              + (externalElement_ ? ("-" + Melown.Utils.stamp(externalElement_)) : "");

    var handler_ = this.events_[type_] && this.events_[type_][id_];

    if (handler_ != null) {
        delete this.events_[type_][id_];

        var element_ =  externalElement_ || this.element_;
        element_.removeEventListener(this.getEventName(type_), handler_, false);
    }
};

Melown.UIElement.prototype.getEventName = function(type_) {
    return type_;
};

//prevent minification
Melown.UIElement.prototype["on"] = Melown.UIElement.prototype.on;
Melown.UIElement.prototype["once"] = Melown.UIElement.prototype.once;
Melown.UIElement.prototype["off"] = Melown.UIElement.prototype.off;
Melown.UIElement.prototype["fire"] = Melown.UIElement.prototype.fire;


/**
 * @constructor
 */
Melown.UI = function(browser_, element_) {
    this.browser_ = browser_;
    this.config_ = browser_.config_;
    this.element_ = element_;
    this.controls_ = [];
    this.init();
    this.instanceId_ = Melown.InstanceCounter++;
};

Melown.UI.prototype.init = function() {
    this.map_ = new Melown.UIControlMap(this);
    this.compass_ = new Melown.UIControlCompass(this, this.config_.controlCompass_);
    this.credits_ = new Melown.UIControlCredits(this);
    this.logo_ = new Melown.UIControlLogo(this);
    this.zoom_ = new Melown.UIControlZoom(this, this.config_.controlZoom_);
    this.layers_ = new Melown.UIControlLayers(this, this.config_.controlLayers_);
    this.fallback_ = new Melown.UIControlFallback(this);
    Melown.Utils.disableContexMenu(this.element_);
};

Melown.UI.prototype.addControl = function(id_, html_, visible_) {
    var control_ = new Melown.UIControlHolder(this, html_, visible_);
    this.controls_[id_] = control_;
    return control_;
};

Melown.UI.prototype.removeControl = function(id_) {
    if (this.controls_[id_] != null) {
        delete this.controls_[id_];
    }
};

Melown.UI.prototype.setControlHtml = function(id_, html_) {
    if (this.controls_[id_] != null) {
        this.controls_[id_].setHTML(html_);
    }
};

Melown.UI.prototype.setControlVisible = function(id_, state_) {
    if (this.controls_[id_] != null) {
        this.controls_[id_].setVisible(state_);
    }
};

Melown.UI.prototype.getControlVisible = function(id_) {
    if (this.controls_[id_] != null) {
        this.controls_[id_].getVisible(state_);
    }
};

Melown.UI.prototype.getControlById = function(id_) {
    return this.controls_[id_];
};

Melown.UI.prototype.getMapControl = function() {
    return this.map_;
};

Melown.UI.prototype.setParam = function(key_) {
    switch (key_) {
        case "controlCompass":     this.setControlVisible("comapss", this.config_.controlCompass_); break;
        case "controlZoom":        this.setControlVisible("zoom", this.config_.controlZoom_); break;
        //case "controlMeasure":     this.setControlVisible(this.config_.controlCompass_); break;
        case "controlScale":       this.setControlVisible("scale", this.config_.controlScale_); break;
        case "controlLayers":      this.setControlVisible("layers", this.config_.controlLayers_); break;
    }
};

Melown.UI.prototype.tick = function(dirty_) {
    if (dirty_) {
        this.compass_.update();
        this.credits_.update();                
    }
};

Melown.UI.prototype["addControl"] = Melown.UI.prototype.addControl;
Melown.UI.prototype["removeControl"] = Melown.UI.prototype.removeControl;
Melown.UI.prototype["setControlHtml"] = Melown.UI.prototype.setControlHtml;
Melown.UI.prototype["setControlVisible"] = Melown.UI.prototype.setControlVisible;
Melown.UI.prototype["getControlVisible"] = Melown.UI.prototype.getControlVisible;
Melown.UI.prototype["getControlById"] = Melown.UI.prototype.getControlById;


/**
 * @constructor
 */
Melown.ControlMode = function(browser_) {
    this.browser_ = browser_;
    this.ui_ = browser_.ui_;
    this.mapControl_ = this.ui_.getMapControl();
    this.mapElement_ = this.mapControl_.getMapElement();
    this.altKey_ = false;
    this.shiftKey_ = false;
    this.ctrlKey_ = false;

    this.mapElement_.on('drag', this.onDrag.bind(this));
    this.mapElement_.on('mousedown', this.onDown.bind(this));
    this.mapElement_.on('mouseup', this.onUp.bind(this));
    this.mapElement_.on('mousewheel', this.onWheel.bind(this));
    this.mapElement_.on('keyup', this.onKeyUp.bind(this), window);
    this.mapElement_.on('keydown', this.onKeyDown.bind(this), window);
    this.mapElement_.on('keypress', this.onKeyPress.bind(this), window);
    this.browser_.on('tick', this.onTick.bind(this));

    this.controlModes_ = {};
    this.currentCotnrolMode_ = 'map-observer';

    // default control modes
    this.addControlMode('map-observer', new Melown.ControlMode.MapObserver(browser_));
    this.addControlMode('disabled', new Melown.ControlMode.Disabled());
    this.addControlMode('pano', new Melown.ControlMode.Pano(browser_));

    // use map observer mode as default
    this.setDefaultControlMode();
};

// Control Mode object interface keys
/** @const */ Melown_ControlMode_Drag = 'drag';
/** @const */ Melown_ControlMode_Down = 'down';
/** @const */ Melown_ControlMode_Up = 'up';
/** @const */ Melown_ControlMode_KeyUp = 'keyup';
/** @const */ Melown_ControlMode_KeyDown = 'keydown';
/** @const */ Melown_ControlMode_KeyPress = 'keypress';
/** @const */ Melown_ControlMode_Wheel = 'wheel';
/** @const */ Melown_ControlMode_Tick = 'tick';
/** @const */ Melown_ControlMode_Reset = 'reset';

// Public methods

Melown.ControlMode.prototype.addControlMode = function(id_, controller_) {
    if (typeof id_ !== 'string'
        || controller_ === null
        || typeof controller_ !== 'object') {
        throw new Error('Melown.ControlMode.addControlMode function has (String, Object) prototype.');
    }

    this.controlModes_[id_] = controller_;
};

Melown.ControlMode.prototype.removeControlMode = function(id_) {
    if (typeof id_ !== 'string') {
        throw new Error('Melown.ControlMode.removeControlMode function takes string as argument.');
    }
    if (id_ === this.currentCotnrolMode_) {
        throw new Error(id_ + ' control mode is in use. Can\'t be removed.');
    }

    delete this.controlModes_[id_];
    this.controlModes_[id_];
};

Melown.ControlMode.prototype.setCurrentControlMode = function(id_, options_) {
    var newMode_ = this.controlModes_[id_];
    if (newMode_ === null || typeof newMode_ !== 'object') {
        throw new Error ('Melown.ControlMode.setCurrentControlMode: Try tu use unregistered control mode ' + id_  + '.');
    }

    // set new mode
    this.currentControlMode_ = id_;

    // call reset
    if (typeof newMode_[Melown_ControlMode_Reset] === 'function') {
        newMode_[Melown_ControlMode_Reset](options_);
    }
};

Melown.ControlMode.prototype.setDefaultControlMode = function() {
    this.setCurrentControlMode('map-observer');
};

Melown.ControlMode.prototype.getCurrentControlMode = function() {
    return this.currentControlMode_;
};

// Event callbacks

Melown.ControlMode.prototype.onDrag = function(event_) {
    if (typeof this._currentController()[Melown_ControlMode_Drag]
        === 'function') {
        this._currentController()[Melown_ControlMode_Drag](event_);
    }
};

Melown.ControlMode.prototype.onDown = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_Down]
        === 'function') {
        this._currentController()[Melown_ControlMode_Down](event_);
    }
};

Melown.ControlMode.prototype.onUp = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_Up]
        === 'function') {
        this._currentController()[Melown_ControlMode_Up](event_);
    }
};

Melown.ControlMode.prototype.onWheel = function(event_) {
    if (typeof this._currentController()[Melown_ControlMode_Wheel]
        === 'function') {
        this._currentController()[Melown_ControlMode_Wheel](event_);
    }
};

Melown.ControlMode.prototype.onKeyUp = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_KeyUp]
        === 'function') {
        this._currentController()[Melown_ControlMode_KeyUp](event_);
    }
};

Melown.ControlMode.prototype.onKeyDown = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_KeyDown]
        === 'function') {
        this._currentController()[Melown_ControlMode_KeyDown](event_);
    }
};

Melown.ControlMode.prototype.onKeyPress = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_KeyPress]
        === 'function') {
        this._currentController()[Melown_ControlMode_KeyPress](event_);
    }
};

Melown.ControlMode.prototype.onTick = function(event_) {
    if (typeof this._currentController()[Melown_ControlMode_Tick]
        === 'function') {
        this._currentController()[Melown_ControlMode_Tick](event_);
    }
};

Melown.ControlMode.prototype.getCurrentController = function() {
    return this.controlModes_[this.currentControlMode_];
};

// Private metod
Melown.ControlMode.prototype._updateModifierKeys = function(event_) {
    this.altKey_ = event_.getModifierKey("alt");
    this.shiftKey_ = event_.getModifierKey("shift");
    this.ctrlKey_ = event_.getModifierKey("ctrl");
    
    //console.log("alt:" + this.altKey_ + "  ctrl:" + this.ctrlKey_ + "  shift:" + this.shiftKey_);
};

Melown.ControlMode.prototype._currentController = function() {
    return this.controlModes_[this.currentControlMode_];
};
/**
 * @constructor
 */
Melown.ControlMode.Disabled = function() {

};
/**
 * @constructor
 */
Melown.ControlMode.MapObserver = function(browser_) {
    this.browser_ = browser_;
    this.config_ = browser_.config_;
    
    this.coordsDeltas_ = [];
    this.orientationDeltas_ = [];
    this.viewExtentDeltas_ = [];

    this["drag"] = this.drag;
    this["wheel"] = this.wheel;
    this["tick"] = this.tick;
    this["reset"] = this.reset;
    this["keyup"] = this.keyup;
    this["keydown"] = this.keydown;
    this["keypress"] = this.keypress;
};

Melown.ControlMode.MapObserver.prototype.drag = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var coords_ = map_.getPositionCoords(pos_);
    var delta_ = event_.getDragDelta();
    var azimuthDistance_ = this.getAzimuthAndDistance(delta_[0], delta_[1]);
    
    var modifierKey_ = (this.browser_.controlMode_.altKey_
               || this.browser_.controlMode_.shiftKey_
               || this.browser_.controlMode_.ctrlKey_);

    if ((event_.getDragButton("left") && !modifierKey_)
        && this.config_.panAllowed_) { //pan
            
        if (map_.getPositionHeightMode(pos_) == "fix") {
            var pos2_ = map_.convertPositionHeightMode(pos_, "float", true);
            if (pos2_ != null) {
                pos_ = pos2_;
                this.setPosition(pos_);
            }
        } else {
            var azimuth_ = Melown.radians(azimuthDistance_[0]);
            var forward_ = [-Math.sin(azimuth_),
                            Math.cos(azimuth_),
                            azimuthDistance_[1], azimuthDistance_[0],
                            coords_[0], coords_[1]];
            
            this.coordsDeltas_.push(forward_);
            this.reduceFloatingHeight(0.9);
        }
    } else if ((event_.getDragButton("right") || modifierKey_) 
               && this.config_.rotationAllowed_) { //rotate
                   
        var sensitivity_ = 0.4;
        this.orientationDeltas_.push([-delta_[0] * sensitivity_,
                                      -delta_[1] * sensitivity_, 0]);
    }
};

Melown.ControlMode.MapObserver.prototype.wheel = function(event_) {
    var map_ = this.browser_.getMap();
    if (!map_ || !this.config_.zoomAllowed_) { 
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getWheelDelta();
    var factor_ = 1.0 + (delta_ > 0 ? -1 : 1)*0.05;
    
    if (map_.getPositionViewMode(pos_) != "obj") {
        return;
    }
    
    this.viewExtentDeltas_.push(factor_);
    this.reduceFloatingHeight(0.8);
};

Melown.ControlMode.MapObserver.prototype.keyup = function(event_) {
};

Melown.ControlMode.MapObserver.prototype.keydown = function(event_) {
};

Melown.ControlMode.MapObserver.prototype.keypress = function(event_) {
};

Melown.ControlMode.MapObserver.prototype.setPosition = function(pos_) {
    pos_ = this.constrainPosition(pos_);
    var map_ = this.browser_.getMap();
    map_.setPosition(pos_);
    //console.log(JSON.stringify(pos_));
};

Melown.ControlMode.MapObserver.prototype.constrainPosition = function(pos_) {

    //reduce tilt whe you are far off the planet
    var map_ = this.browser_.getMap();

    if (map_.getPositionViewMode(pos_) == "obj") {
        var rf_ = map_.getReferenceFrame();
        var srs_ = map_.getSrsInfo(rf_["navigationSrs"]);
        
        var distance_ = map_.getPositionViewExtent(pos_) / Math.tan(Melown.radians(map_.getPositionFov(pos_)*0.5));
        
        if (srs_["a"]) {
            var factor_ = Math.min(distance_ / (srs_["a"]*0.5), 1.0);
            var maxTilt_ = 20 + ((-90) - 20) * factor_; 
            var minTilt_ = -90; 
            
            var o = map_.getPositionOrientation(pos_);
            
            if (o[1] > maxTilt_) {
                o[1] = maxTilt_;
            }
    
            if (o[1] < minTilt_) {
                o[1] = minTilt_;
            }
    
            pos_ = map_.setPositionOrientation(pos_, o);
        }
    }

    //do not allow camera under terrain
    var camPos_ = map_.getPositionCameraCoords(pos_, "float");
    var cameraConstrainDistance_ = 1;
    
    if (!camPos_) {
        debugger;
        camPos_ = map_.getPositionCameraCoords(pos_, "float");
        return pos_;
    }

    var hmax_ = Math.max(Math.min(4000,cameraConstrainDistance_), (distance_ * Math.tan(Melown.radians(3.0))));
    var cameraHeight_ = camPos_[2]; //this.cameraHeight() - this.cameraHeightOffset_ - this.cameraHeightOffset2_;

    if (cameraHeight_ < hmax_) {
        var o = map_.getPositionOrientation(pos_);

        var getFinalOrientation = (function(start_, end_, level_) {
            var value_ = (start_ + end_) * 0.5;

            if (level_ > 20) {
                return value_;
            } else {
                o[1] = value_;
                pos_ = map_.setPositionOrientation(pos_, o);

                if (map_.getPositionCameraCoords(pos_, "float")[2] < hmax_) {
                    return getFinalOrientation(start_, value_, level_+1);
                } else {
                    return getFinalOrientation(value_, end_, level_+1);
                }
            }

        }).bind(this);

        o[1] = getFinalOrientation(-90, Math.min(-1, o[1]), 0);
        pos_ = map_.setPositionOrientation(pos_, o);
    }

    return pos_;
};

Melown.ControlMode.MapObserver.prototype.reduceFloatingHeight = function(factor_) {
    var map_ = this.browser_.getMap();
    var pos_ = map_.getPosition();
    var coords_ = map_.getPositionCoords(pos_);
    
    if (map_.getPositionHeightMode(pos_) == "float" &&
        map_.getPositionViewMode(pos_) == "obj") {
        if (coords_[2] != 0) {
            coords_[2] *= factor_;

            if (Math.abs(coords_[2]) < 0.1) {
                coords_[2] = 0;
            }

            pos_ = map_.setPositionCoords(pos_, coords_);
            this.setPosition(pos_);
        }
    }
};

Melown.ControlMode.MapObserver.prototype.isNavigationSRSProjected = function() {
    var map_ = this.browser_.getMap();
    var rf_ = map_.getReferenceFrame();
    var srs_ = map_.getSrsInfo(rf_["navigationSrs"]);
    return (srs_) ? (srs_["type"] == "projected") : false; 
};

Melown.ControlMode.MapObserver.prototype.getAzimuthAndDistance = function(dx_, dy_) {
    var map_ = this.browser_.getMap();
    var pos_ = map_.getPosition();
    var viewExtent_ = map_.getPositionViewExtent(pos_);
    var fov_ = map_.getPositionFov(pos_)*0.5;

    var sensitivity_ = 0.5;
    var zoomFactor_ = ((viewExtent_ * Math.tan(Melown.radians(fov_))) / 800) * sensitivity_;
    dx_ *= zoomFactor_;
    dy_ *= zoomFactor_;

    var distance_ = Math.sqrt(dx_*dx_ + dy_*dy_);    
    var azimuth_ = Melown.degrees(Math.atan2(dx_, dy_)) + map_.getPositionOrientation(pos_)[0]; 
    
    return [azimuth_, distance_];
};

Melown.ControlMode.MapObserver.prototype.tick = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var update_ = false;
    var inertia_ = [0.8, 0.8, 0.7]; 
    //var inertia_ = [0.95, 0.8, 0.8]; 
    //var inertia_ = [0, 0, 0]; 

    //process coords deltas
    if (this.coordsDeltas_.length > 0) {
        var deltas_ = this.coordsDeltas_;
        var forward_ = [0,0];
        var coords_ = map_.getPositionCoords(pos_);
        
        //get foward vector form coord deltas    
        for (var i = 0; i < deltas_.length; i++) {
            var delta_ = deltas_[i];

            var coords2_ = [delta_[4], delta_[5]];
            
            var azimuth_ = delta_[3];
            azimuth_ += 0;//map_.getAzimuthCorrection(coords2_, coords_);
            azimuth_ = Melown.radians(azimuth_);

            //console.log("correction: " + map_.getAzimuthCorrection(coords2_, coords_) + " coords2: " + JSON.stringify(coords2_) + " coords: " + JSON.stringify(coords_));


            forward_[0] += -Math.sin(azimuth_) * delta_[2];  
            forward_[1] += Math.cos(azimuth_) * delta_[2];


            /*
            forward_[0] += delta_[0] * delta_[2];  
            forward_[1] += delta_[1] * delta_[2];
            */
            delta_[2] *= inertia_[0];

            
            //remove zero deltas
            if (delta_[2] < 0.01) {
                deltas_.splice(i, 1);
                i--;
            }
        }
        
        var distance_ = Math.sqrt(forward_[0]*forward_[0] + forward_[1]*forward_[1]);
        var azimuth_ = Melown.degrees(Math.atan2(forward_[0], forward_[1]));
    
        //console.log("tick: " + azimuth_ + " " + distance_);

        //apply final azimuth and distance
        var correction_ = map_.getPositionOrientation(pos_)[0];
        pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_);
        correction_ = map_.getPositionOrientation(pos_)[0] - correction_;

        //console.log("correction2: " + correction_);

        for (var i = 0; i < deltas_.length; i++) {
            var delta_ = deltas_[i];
            delta_[3] += correction_; 
        }

        update_ = true;
    }

    //process coords deltas
    if (this.orientationDeltas_.length > 0) {
        var deltas_ = this.orientationDeltas_;
        var orientation_ = map_.getPositionOrientation(pos_);
        
        //apply detals to current orientation    
        for (var i = 0; i < deltas_.length; i++) {
            var delta_ = deltas_[i];
            orientation_[0] += delta_[0];  
            orientation_[1] += delta_[1];
            orientation_[2] += delta_[2];
            delta_[0] *= inertia_[1];
            delta_[1] *= inertia_[1];
            delta_[2] *= inertia_[1];
            
            //remove zero deltas
            if (delta_[0]*delta_[0] + delta_[1]*delta_[1] + delta_[2]*delta_[2] < 0.1) {
                deltas_.splice(i, 1);
                i--;
            }
        }

        //apply final orintation
        pos_ = map_.setPositionOrientation(pos_, orientation_);
        update_ = true;
    }

    //process view extents deltas
    if (this.viewExtentDeltas_.length > 0) {
        var deltas_ = this.viewExtentDeltas_;
        var viewExtent_ = map_.getPositionViewExtent(pos_);
        
        //apply detals to current orientation    
        for (var i = 0; i < deltas_.length; i++) {
            viewExtent_ *= deltas_[i];
            deltas_[i] += (1 - deltas_[i]) * (1.0 - inertia_[2]);
            
            //remove zero deltas
            if (Math.abs(1 - deltas_[i]) < 0.001) {
                deltas_.splice(i, 1);
                i--;
            }
        }
        
        viewExtent_ = Math.max(1, viewExtent_);

        //apply final orintation
        pos_ = map_.setPositionViewExtent(pos_, viewExtent_);
        update_ = true;
    }


    //set new position
    if (update_) {
        this.setPosition(pos_);        
    }
    
};

Melown.ControlMode.MapObserver.prototype.reset = function(config_) {
    this.coordsDeltas_ = [];
    this.orientationDeltas_ = [];
    this.viewExtentDeltas_ = [];
};


/**
 * @constructor
 */
Melown.ControlMode.Pano = function(browser_) {
    this.browser_ = browser_;
    this.config_ = null;

    this.center_ = [0, 0];
    this.dragging_ = false;
    this.velocity_ = [0, 0];

    this.impulse_ = [0, 0];

    this["drag"] = this.drag;
    this["down"] = this.drag;
    this["up"] = this.drag;
    this["wheel"] = this.wheel;
    this["tick"] = this.tick;
    this["reset"] = this.reset;
    this["keyup"] = this.keyup;
    this["keydown"] = this.keydown;
    this["keypress"] = this.keypress;
};

Melown.ControlMode.Pano.prototype.drag = function(event_) {
    if (!this.dragging_) {
        return;
    }

    var mouse_ = event_.getMousePosition();
    var delta_ = [mouse_[0] - this.center_[0], mouse_[1] - this.center_[1]];
    var sensitivity_ = 0.008;
    this.velocity_[0] = delta_[0] * sensitivity_;
    this.velocity_[1] = delta_[1] * sensitivity_;

    this.impulse_[0] = delta_[0] * sensitivity_;
    this.impulse_[1] = delta_[1] * sensitivity_;
};

Melown.ControlMode.Pano.prototype.down = function(event_) {
    if (event_.getMouseButton() === 'left') {
        this.center_ = event_.getMousePosition();
        this.dragging_ = true;
    }
};

Melown.ControlMode.Pano.prototype.up = function(event_) {
    if (event_.getMouseButton() === 'left') {
        this.dragging_ = false;
    }
};

Melown.ControlMode.Pano.prototype.wheel = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getWheelDelta();

    var factor_ = (delta_ > 0 ? -1 : 1) * 1;
    pos_[9] = Melown.clamp(pos_[9] + factor_, 1, 179);

    map_.setPosition(pos_);
};

Melown.ControlMode.Pano.prototype.keyup = function(event_) {
};

Melown.ControlMode.Pano.prototype.keydown = function(event_) {
};

Melown.ControlMode.Pano.prototype.keypress = function(event_) {
};

Melown.ControlMode.Pano.prototype.tick = function(event_) {
    if (this.velocity_[0] == 0.0 && this.velocity_[1] == 0.0) {
        return;
    }

    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    pos_[5] -= this.velocity_[0];
    pos_[6] -= this.velocity_[1];
    map_.setPosition(pos_);

    // friction
    if (this.dragging_) {
        return;
    }
    var step_ = 0.9;
    var treshold_ = 0.0005;

    if (Math.abs(this.velocity_[0]) < treshold_) {
        this.velocity_[0] = 0.0;
    } else {
        this.velocity_[0] *= step_;
    }

    if (Math.abs(this.velocity_[1]) < treshold_) {
        this.velocity_[1] = 0.0;
    } else {
        this.velocity_[1] *= step_;
    }

};

Melown.ControlMode.Pano.prototype.reset = function(config_) {
    this.config_ = config_;
};
/**
 * @constructor
 */
Melown.Browser = function(element_, config_) {
    this.initConfig();
    this.setConfigParams(config_, true);
    this.ui_ = new Melown.UI(this, (typeof element_ === "string") ? document.getElementById(element_) : element_);

    this.core_ = Melown.MapCore("melown-map", config_);

    if (this.core_ == null) {
        this.ui_.setControlDisplayState("fallback", true);
        return;
    }

    this.autopilot_ = new Melown.Autopilot(this);
    this.rois_ = new Melown.Rois(this);
    this.controlMode_ = new Melown.ControlMode(this, this.ui_);

    this.on("map-loaded", this.onMapLoaded.bind(this));
    this.on("map-unloaded", this.onMapUnloaded.bind(this));
    this.on("map-update", this.onMapUpdate.bind(this));

    this.on("tick", this.onTick.bind(this));
};

Melown.Browser.prototype.getCore = function() {
    return this.core_;
};

Melown.Browser.prototype.getMap = function() {
    return this.core_.getMap();
};

Melown.Browser.prototype.getRenderer = function() {
    return this.core_.getRenderer();
};

Melown.Browser.prototype.getProj4 = function() {
    return this.core_.getRenderer();
};

Melown.Browser.prototype.getUI = function() {
    return this.ui_;
};

Melown.Browser.prototype.getControlMode = function() {
    return this.controlMode_;
};

Melown.Browser.prototype.on = function(name_, listener_) {
    this.core_.on(name_, listener_);
};

Melown.Browser.prototype.callListener = function(name_, event_) {
    this.core_.callListener(name_, event_);
};

Melown.Browser.prototype.onMapLoaded = function() {
};

Melown.Browser.prototype.onMapUnloaded = function() {

};

Melown.Browser.prototype.onMapUpdate = function() {
    this.dirty_ = true;

};

Melown.Browser.prototype.onTick = function() {
    this.autopilot_.tick();
    this.ui_.tick(this.dirty_);
    this.dirty_ = false;
};



Melown.Browser.prototype.initConfig = function(data_) {
    this.config_ = {
        panAllowed_ : true,
        rotationAllowed_ : true,
        zoomAllowed_ : true,
        inertia_ : 1.1,
        controlCompass_ : true,
        controlZoom_ : true,
        controlMeasure_ : false,
        controlScale_ : true,
        controlLayers_ : false
    };
};

Melown.Browser.prototype.setConfigParams = function(params_, ignoreCore_) {
    if (typeof params_ === "object" && params_ !== null) {
        for (var key_ in params_) {
            this.setConfigParam(key_, params_[key_]);
        }
    }
};

Melown.Browser.prototype.updateUI = function(key_) {
    if (this.ui_ == null) {
        return;
    }

    this.ui_.setParam(key_);
};

Melown.Browser.prototype.setConfigParam = function(key_, value_, ignoreCore_) {
    switch (key_) {
        case "pos":                
        case "position":           this.config_.position_ = value_;                                           break;
        case "view":               this.config_.view_ = value_;                                               break;
        case "panAllowed":         this.config_.panAllowed_ = Melown.Utils.validateBool(value_, true);        break;
        case "rotationAllowed":    this.config_.rotationAllowed_ = Melown.Utils.validateBool(value_, true);   break;
        case "zoomAllowed":        this.config_.zoomAllowed_ = Melown.Utils.validateBool(value_, true);       break;
        case "inertia":            this.config_.inertia_ = Melown.Utils.validateNumber(value_, 0, 0.99, 0.9); break;
        case "controlCompass":     this.config_.controlCompass_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);   break;
        case "controlZoom":        this.config_.controlZoom_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);      break;
        case "controlMeasure":     this.config_.controlMeasure_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);  break;
        case "controlScale":       this.config_.controlScale_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);     break;
        case "controlLayers":      this.config_.controlLayers_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);   break;
    }

    if (ignoreCore_ == true) {
        if (key_.indexOf("map") == 0 && this.core_.getMap()) {
            this.core_.getMap().setConfigParam(key_, value_);
        }

        if (key_.indexOf("renderer") == 0) {
            this.core_.getRenderer().setConfigParam(key_, value_);
        }
    }
};

Melown.Browser.prototype.getConfigParam = function(key_) {
    switch (key_) {
        case "position":           return this.config_.position_;
        case "view":               return this.config_.view_;
        case "panAllowed":         return this.config_.panAllowed_;
        case "rotationAllowed":    return this.config_.rotationAllowed_;
        case "zoomAllowed":        return this.config_.zoomAllowed_;
        case "inertia":            return this.config_.inertia_;
        case "controlCompass":     return this.config_.controlCompass_;
        case "controlZoom":        return this.config_.controlZoom_;
        case "controlMeasure":     return this.config_.controlMeasure_;
        case "controlScale":       return this.config_.controlScale_;
        case "controlLayers":      return this.config_.controlLayers_;
    }

    if (ignoreCore_ == true) {
        if (key_.indexOf("map") == 0 && this.core_.getMap()) {
            return this.core_.getMap().getConfigParam(key_, value_);
        }

        if (key_.indexOf("renderer") == 0) {
            return this.core_.getRenderer().getConfigParam(key_, value_);
        }
    }
};



Melown.MapBrowser = function(element_, config_) {
    var interface_ = new Melown.BrowserInterface(element_, config_);
    return interface_.core_ ? interface_ : null;
};

/**
 * @constructor
 */
Melown.BrowserInterface = function(element_, config_) {
    this.browser_ = new Melown.Browser(element_, config_);
    this.core_ = this.browser_.getCore();
    this.map_ = null;//this.core_.getMap();
    this.ui_ = this.browser_.ui_;
    this.autopilot_ = this.browser_.autopilot_;
    this.core_.on("map-loaded", (function(){ this.map_ = this.core_.getMap(); }).bind(this));
    this.core_.on("map-unloaded", (function(){ this.map_ = null; }).bind(this));    
};

Melown.BrowserInterface.prototype.getRenderer = function() {
    return this.core_.getRenderer();
};

Melown.BrowserInterface.prototype.getProj4 = function() {
    return this.core_.getProj4();
};

Melown.BrowserInterface.prototype.getUI = function() {
    return this.ui_;
};

Melown.BrowserInterface.prototype.setControlMode = function(mode_) {
    this.browser_.controlMode_ = mode_;
    return this;    
};

Melown.BrowserInterface.prototype.getControlMode = function() {
    return this.browser_.controlMode_;
};

Melown.BrowserInterface.prototype.setPosition = function(position_) {
    if(!this.map_) return;
    this.map_.setPosition(position_);
    return this;    
};

Melown.BrowserInterface.prototype.getPosition = function() {
    if(!this.map_) return;
    return this.map_.getPosition();
};

Melown.BrowserInterface.prototype.getPositionCredits = function() {
    if(!this.map_) return;
    return this.map_.getCurrentCredits();
};

Melown.BrowserInterface.prototype.setView = function(view_) {
    if(!this.map_) return;
    this.map_.setView(view_);
    return this;    
};

Melown.BrowserInterface.prototype.getView = function() {
    if(!this.map_) return;
    return this.map_.getView();
};

Melown.BrowserInterface.prototype.getCredits = function() {
    if(!this.map_) return;
    return this.map_.getCredits();
};

Melown.BrowserInterface.prototype.getCreditsInfo = function(creditId_) {
    if(!this.map_) return;
    var credit_ = this.map_.getCredit(creditId_);
    return (credit_ != null) ? credit_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getViews = function() {
    if(!this.map_) return;
    return this.map_.getMapViews();
};

Melown.BrowserInterface.prototype.getViewInfo = function(viewId_) {
    if(!this.map_) return;
    var view_ = this.map_.getMapView(viewId_);
    return (view_ != null) ? view_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getBoundLayers = function() {
    if(!this.map_) return;
    return this.map_.getBoundLayers();
};

Melown.BrowserInterface.prototype.getBoundLayerInfo = function(layerId_) {
    if(!this.map_) return;
    var layer_ = this.map_.getBoundLayer(layerId_);
    return (layer_ != null) ? layer_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getFreeLayers = function() {
    if(!this.map_) return;
    return this.map_.getFreeLayers();
};

Melown.BrowserInterface.prototype.getFreeLayerInfo = function(layerId_) {
    if(!this.map_) return;
    var layer_ = this.map_.getFreeLayer(layerId_);
    return (layer_ != null) ? layer_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getSurfaces = function() {
    if(!this.map_) return;
    return this.map_.getSurfaces();
};

Melown.BrowserInterface.prototype.getSurfaceInfo = function(surfaceId_) {
    if(!this.map_) return;
    var surface_ = this.map_.getFreeLayer(surfaceId_);
    return (surface_ != null) ? surface_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getSrses = function() {
    if(!this.map_) return;
    return this.map_.getSrses();
};

Melown.BrowserInterface.prototype.getSrsInfo = function(srsId_) {
    if(!this.map_) return;
    var srs_ = this.map_.getSrs(srsId_);
    return (srs_ != null) ? srs_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getReferenceFrame = function() {
    if(!this.map_) return;
    return this.map_.getReferenceFrame();
};

Melown.BrowserInterface.prototype.convertPositionViewMode = function(position_, mode_) {
    if(!this.map_) return;
    return this.map_.convertPositionViewMode(position_, mode_);
};

Melown.BrowserInterface.prototype.convertPositionHeightMode = function(position_, mode_) {
    if(!this.map_) return;
    return this.map_.convertPositionHeightMode(position_, mode_);
};

Melown.BrowserInterface.prototype.convertCoords = function(sourceSrs_, destinationSrs_, coords_) {
    if(!this.map_) return;
    return this.map_.convertCoords(sourceSrs_, destinationSrs_, coords_);
};

Melown.BrowserInterface.prototype.convertCoordsFromNavToCanvas = function(coords_, heightMode_) {
    if(!this.map_) return;
    return this.map_.convertCoordsFromNavToCanvas(coords_, heightMode_);
};

Melown.BrowserInterface.prototype.clonePosition = function(position_) {
    if(!this.map_) return;
    return this.map_.clonePosition(position_);
};

Melown.BrowserInterface.prototype.arePositionsSame = function(position_, position2_) {
    if(!this.map_) return;
    return this.map_.arePositionsSame(position_, position2_);
};

Melown.BrowserInterface.prototype.setPositionCoords = function(position_, coords_) {
    if(!this.map_) return;
    return this.map_.setPositionCoords(position_, coords_);
};

Melown.BrowserInterface.prototype.getPositionCoords = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionCoords(position_);
};

Melown.BrowserInterface.prototype.setPositionHeight = function(position_, height_) {
    if(!this.map_) return;
    return this.map_.setPositionHeight(position_, height_);
};

Melown.BrowserInterface.prototype.getPositionHeight = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionHeight(position_);
};

Melown.BrowserInterface.prototype.setPositionOrientation = function(position_, orientation_) {
    if(!this.map_) return;
    return this.map_.setPositionOrientation(position_);
};

Melown.BrowserInterface.prototype.getPositionOrientation = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionOrientation(position_);
};

Melown.BrowserInterface.prototype.setPositionViewExtent = function(position_, extent_) {
    if(!this.map_) return;
    return this.map_.setPositionViewExtent(position_, extent_);
};

Melown.BrowserInterface.prototype.getPositionViewExtent = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionViewExtent(position_);
};

Melown.BrowserInterface.prototype.setPositionFov = function(position_, fov_) {
    if(!this.map_) return;
    return this.map_.setPositionFov(position_, fov_);
};

Melown.BrowserInterface.prototype.getPositionFov = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionFov(position_);
};

Melown.BrowserInterface.prototype.getPositionViewMode = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionViewMode(position_);
};

Melown.BrowserInterface.prototype.getPositionHeigthMode = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionHeightMode(position_);
};

Melown.BrowserInterface.prototype.getPositionCanvasCoords = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionCanvasCoords(position_);
};

Melown.BrowserInterface.prototype.getPositionCameraCoords = function(position_, mode_) {
    if(!this.map_) return;
    return this.map_.getPositionCameraCoords(position_, mode_);
};

Melown.BrowserInterface.prototype.movePositionCoordsTo = function(position_, azimuth_, distance_) {
    if(!this.map_) return;
    return this.map_.movePositionCoordsTo(position_, azimuth_, distance_);
};

Melown.BrowserInterface.prototype.getSurfaceHeight = function() {
    if(!this.map_) return;
    return this.map_.getSurfaceHeight(coords_, precision_);
};

Melown.BrowserInterface.prototype.getDistance = function(coords_, coords2_, includingHeight_) {
    if(!this.map_) return;
    return this.map_.getDistance(coords_, coords2_, includingHeight_);
};

Melown.BrowserInterface.prototype.getAzimuthCorrection = function(coords_, coords2_) {
    if(!this.map_) return;
    return this.map_.getAzimuthCorrection(coords_, coords2_);
};

Melown.BrowserInterface.prototype.getCameraInfo = function() {
    if(!this.map_) return;
    return this.map_.getCameraInfo();
};

Melown.BrowserInterface.prototype.generateTrajectory = function(position_, position2_, options_) {
    if(!this.map_) return;
    return this.map_.generateTrajectory(position_, position2_, options_);
};

Melown.BrowserInterface.prototype.redraw = function() {
    if(!this.map_) return;
    this.map_.redraw();
    return this;    
};

Melown.BrowserInterface.prototype.addRenderSlot = function(id_, callback_, enabled_) {
    if(!this.map_) return;
    return this.map_.addRenderSlot(id_, callback_, enabled_);
};
 
Melown.BrowserInterface.prototype.moveRenderSlotBefore = function(whichId_, whereId_) {
    if(!this.map_) return;
    this.map_.moveRenderSlotBefore(whichId_, whereId_);
    return this;    
};
 
Melown.BrowserInterface.prototype.moveRenderSlotAfter = function(whichId_, whereId_) {
    if(!this.map_) return;
    this.map_.moveRenderSlotAfter(whichId_, whereId_);
    return this;    
};

Melown.BrowserInterface.prototype.removeRenderSlot = function(id_) {
    if(!this.map_) return;
    this.map_.removeRenderSlot(id_);
    return this;    
};

Melown.BrowserInterface.prototype.setRenderSlotEnabled = function(id_, state_) {
    if(!this.map_) return;
    this.map_.setRenderSlotEnabled(id_, state_);
    return this;    
};
 
Melown.BrowserInterface.prototype.getRenderSlotEnabled = function(id_) {
    if(!this.map_) return;
    return this.map_.getRenderSlotEnabled(id_);
};
 
Melown.BrowserInterface.prototype.setLoaderSuspended = function(state_) {
    if(!this.map_) return;
    this.map_.setLoaderSuspended(state_);
    return this;    
};

Melown.BrowserInterface.prototype.getLoaderSuspended = function() {
    if(!this.map_) return;
    return this.map_.getLoaderSuspended();
};
 
Melown.BrowserInterface.prototype.getGpuCache = function() {
    if(!this.map_) return;
    return this.map_.getGpuCache();
};

Melown.BrowserInterface.prototype.flyTo = function(position_, options_) {
    if(!this.map_) return;
    this.autopilot_.flyTo(position_, options_); 
    return this;    
};

Melown.BrowserInterface.prototype.flyTrajectory = function(trajectory_, sampleDuration_) {
    if(!this.map_) return;
    this.autopilot_.flyTrajectory(trajectory_, sampleDuration_); 
    return this;    
};

Melown.BrowserInterface.prototype.cancelFlight = function() {
    if(!this.map_) return;
    this.autopilot_.cancelFlight(); 
    return this;    
}; 

Melown.BrowserInterface.prototype.on = function(eventName_, call_) {
    this.core_.on(eventName_, call_);
    return this;    
};

Melown.BrowserInterface.prototype.getControl = function(id_) {
    return this.ui_.getControlById(id_);
};

Melown.BrowserInterface.prototype.addControl = function(id_, html_, visible_) {
    return this.ui_.addControl(id_, html_, visible_);
};

Melown.BrowserInterface.prototype.removeControl = function(id_) {
    this.ui_.removeControl(id_);
    return this;    
};

Melown.BrowserInterface.prototype.setParams = function(params_) {
    this.setConfigParams(params_);
    return this;
};

Melown.BrowserInterface.prototype.setParam = function(key_, value_) {
    this.setConfigParam(key_, value_);
    return this;
};

Melown.BrowserInterface.prototype.getParam = function(key_) {
    return this.getConfigParam(key_, value_);
};


Melown.getBrowserVersion = function() {
    return "0.1";
};

//prevent minification
Melown["MapBrowser"] = Melown.MapBrowser;
Melown.BrowserInterface.prototype["getRenderer"] = Melown.BrowserInterface.prototype.getRenderer; 
Melown.BrowserInterface.prototype["getProj4"] = Melown.BrowserInterface.prototype.getProj4; 
Melown.BrowserInterface.prototype["getUI"] = Melown.BrowserInterface.prototype.getUI; 
Melown.BrowserInterface.prototype["setControlMode"] = Melown.BrowserInterface.prototype.setControlMode;
Melown.BrowserInterface.prototype["getControlMode"] = Melown.BrowserInterface.prototype.getControlMode;
Melown.BrowserInterface.prototype["setPosition"] = Melown.BrowserInterface.prototype.setPosition;
Melown.BrowserInterface.prototype["getPosition"] = Melown.BrowserInterface.prototype.getPosition;
Melown.BrowserInterface.prototype["getCurrentCredits"] = Melown.BrowserInterface.prototype.getCurrentCredits; 
Melown.BrowserInterface.prototype["setView"] = Melown.BrowserInterface.prototype.setView; 
Melown.BrowserInterface.prototype["getView"] = Melown.BrowserInterface.prototype.getView; 
Melown.BrowserInterface.prototype["getCredits"] = Melown.BrowserInterface.prototype.getCredits; 
Melown.BrowserInterface.prototype["getCreditsInfo"] = Melown.BrowserInterface.prototype.getCreditsInfo; 
Melown.BrowserInterface.prototype["getViews"] = Melown.BrowserInterface.prototype.getViews; 
Melown.BrowserInterface.prototype["getViewInfo"] = Melown.BrowserInterface.prototype.getViewInfo; 
Melown.BrowserInterface.prototype["getBoundLayers"] = Melown.BrowserInterface.prototype.getBoundLayers; 
Melown.BrowserInterface.prototype["getBoundLayerInfo"] = Melown.BrowserInterface.prototype.getBoundLayerInfo; 
Melown.BrowserInterface.prototype["getFreeLayers"] = Melown.BrowserInterface.prototype.getFreeLayers; 
Melown.BrowserInterface.prototype["getFreeLayerInfo"] = Melown.BrowserInterface.prototype.getFreeLayerInfo; 
Melown.BrowserInterface.prototype["getSurfaces"] = Melown.BrowserInterface.prototype.getSurfaces; 
Melown.BrowserInterface.prototype["getSurfaceInfo"] = Melown.BrowserInterface.prototype.getSurfaceInfo; 
Melown.BrowserInterface.prototype["getSrses"] = Melown.BrowserInterface.prototype.getSrses; 
Melown.BrowserInterface.prototype["getSrsInfo"] = Melown.BrowserInterface.prototype.getSrsInfo; 
Melown.BrowserInterface.prototype["getReferenceFrame"] = Melown.BrowserInterface.prototype.getReferenceFrame; 
Melown.BrowserInterface.prototype["convertPositionViewMode"] = Melown.BrowserInterface.prototype.convertPositionViewMode; 
Melown.BrowserInterface.prototype["convertPositionHeightMode"] = Melown.BrowserInterface.prototype.convertPositionHeightMode; 
Melown.BrowserInterface.prototype["convertCoords"] = Melown.BrowserInterface.prototype.convertCoords; 
Melown.BrowserInterface.prototype["convertCoordsFromNavToCanvas"] = Melown.BrowserInterface.prototype.convertCoordsFromNavToCanvas; 
Melown.BrowserInterface.prototype["clonePosition"] = Melown.BrowserInterface.prototype.clonePosition; 
Melown.BrowserInterface.prototype["arePositionsSame"] = Melown.BrowserInterface.prototype.arePositionsSame; 
Melown.BrowserInterface.prototype["setPositionCoords"] = Melown.BrowserInterface.prototype.setPositionCoords; 
Melown.BrowserInterface.prototype["getPositionCoords"] = Melown.BrowserInterface.prototype.getPositionCoords; 
Melown.BrowserInterface.prototype["setPositionHeight"] = Melown.BrowserInterface.prototype.setPositionHeight; 
Melown.BrowserInterface.prototype["getPositionHeight"] = Melown.BrowserInterface.prototype.getPositionHeight; 
Melown.BrowserInterface.prototype["setPositionOrientation"] = Melown.BrowserInterface.prototype.setPositionOrientation; 
Melown.BrowserInterface.prototype["getPositionOrientation"] = Melown.BrowserInterface.prototype.getPositionOrientation; 
Melown.BrowserInterface.prototype["setPositionViewExtent"] = Melown.BrowserInterface.prototype.setPositionViewExtent; 
Melown.BrowserInterface.prototype["getPositionViewExtent"] = Melown.BrowserInterface.prototype.getPositionViewExtent;
Melown.BrowserInterface.prototype["setPositionFov"] = Melown.BrowserInterface.prototype.setPositionFov; 
Melown.BrowserInterface.prototype["getPositionFov"] = Melown.BrowserInterface.prototype.getPositionFov; 
Melown.BrowserInterface.prototype["getPositionViewMode"] = Melown.BrowserInterface.prototype.getPositionViewMode; 
Melown.BrowserInterface.prototype["getPositionHeigthMode"] = Melown.BrowserInterface.prototype.getPositionHeigthMode; 
Melown.BrowserInterface.prototype["getPositionCanvasCoords"] = Melown.BrowserInterface.prototype.getPositionCanvasCoords; 
Melown.BrowserInterface.prototype["getPositionCameraCoords"] = Melown.BrowserInterface.prototype.getPositionCameraCoords; 
Melown.BrowserInterface.prototype["movePositionCoordsTo"] = Melown.BrowserInterface.prototype.movePositionCoordsTo; 
Melown.BrowserInterface.prototype["getSurfaceHeight"] = Melown.BrowserInterface.prototype.getSurfaceHeight;
Melown.BrowserInterface.prototype["getDistance"] = Melown.BrowserInterface.prototype.getDistance;
Melown.BrowserInterface.prototype["getAzimuthCorrection"] = Melown.BrowserInterface.prototype.getAzimuthCorrection; 
Melown.BrowserInterface.prototype["getCameraInfo"] = Melown.BrowserInterface.prototype.getCameraInfo;
Melown.BrowserInterface.prototype["generateTrajectory"] = Melown.BrowserInterface.prototype.generateTrajectory; 
Melown.BrowserInterface.prototype["redraw"] = Melown.BrowserInterface.prototype.redraw;
Melown.BrowserInterface.prototype["addRenderSlot"] = Melown.BrowserInterface.prototype.addRenderSlot; 
Melown.BrowserInterface.prototype["moveRenderSlotBefore"] = Melown.BrowserInterface.prototype.moveRenderSlotBefore; 
Melown.BrowserInterface.prototype["moveRenderSlotAfter"] = Melown.BrowserInterface.prototype.moveRenderSlotAfter;
Melown.BrowserInterface.prototype["removeRenderSlot"] = Melown.BrowserInterface.prototype.removeRenderSlot;
Melown.BrowserInterface.prototype["setRenderSlotEnabled"] = Melown.BrowserInterface.prototype.setRenderSlotEnabled; 
Melown.BrowserInterface.prototype["getRenderSlotEnabled"] = Melown.BrowserInterface.prototype.getRenderSlotEnabled; 
Melown.BrowserInterface.prototype["setLoaderSuspended"] = Melown.BrowserInterface.prototype.setLoaderSuspended;
Melown.BrowserInterface.prototype["getLoaderSuspended"] = Melown.BrowserInterface.prototype.getLoaderSuspended; 
Melown.BrowserInterface.prototype["getGpuCache"] = Melown.BrowserInterface.prototype.getGpuCache;
Melown.BrowserInterface.prototype["flyTo"] = Melown.BrowserInterface.prototype.flyTo; 
Melown.BrowserInterface.prototype["flyTrajectory"] = Melown.BrowserInterface.prototype.flyTrajectory; 
Melown.BrowserInterface.prototype["cancelFlight"] = Melown.BrowserInterface.prototype.cancelFlight; 
Melown.BrowserInterface.prototype["on"] = Melown.BrowserInterface.prototype.on; 
Melown.BrowserInterface.prototype["getControl"] = Melown.BrowserInterface.prototype.getControl; 
Melown.BrowserInterface.prototype["addControl"] = Melown.BrowserInterface.prototype.addControl; 
Melown.BrowserInterface.prototype["removeControl"] = Melown.BrowserInterface.prototype.removeControl; 
Melown.BrowserInterface.prototype["setParams"] = Melown.BrowserInterface.prototype.setParams; 
Melown.BrowserInterface.prototype["setParam"] = Melown.BrowserInterface.prototype.setParam; 
Melown.BrowserInterface.prototype["getParam"] = Melown.BrowserInterface.prototype.getParam; 
Melown["getBrowserVersion"] = Melown.getBrowserVersion; 

