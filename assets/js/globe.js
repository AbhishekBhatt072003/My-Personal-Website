var r = document.querySelector(':root');
var rs = getComputedStyle(r);

var value = rs.getPropertyValue('--globe-color')
$(document).ready(function () {

    var entries = [

        { label: 'Dev Blog' },
        { label: 'Flashforum' },
        { label: 'jQueryScript.net' },
        { label: 'Javascript-Forum' },
        { label: 'JSFiddle' },
        { label: 'CodePen' },
        { label: 'three.js' },
        { label: 'WebGLStudio.js' },
        { label: 'JS Compress' },
        { label: 'TinyPNG' },
        { label: 'Can I Use' },
        { label: 'URL shortener' },
        { label: 'HTML Encoder' },
        { label: 'Twitter' },
        { label: 'deviantART' }
    ];

    var settings = {

        entries: entries,
        width: 580,
        height: 500,
        radius: '88%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.1,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.8,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '20',
        fontColor: value,
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: false,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#holder').svg3DTagCloud(settings);

});
