
# merge melown 
cat lib/melown-core-v1-min.js \
    src/utility/utility.js \
    src/utility/dom.js \
    src/autopilot/autopilot.js \
    src/rois/rois.js \
    src/ui/control/compass.js \
    src/ui/control/credits.js \
    src/ui/control/layers.js \
    src/ui/control/fallback.js \
    src/ui/control/holder.js \
    src/ui/control/logo.js \
    src/ui/control/scale.js \
    src/ui/control/map.js \
    src/ui/control/zoom.js \
    src/ui/element/element.js \
    src/ui/element/draggable.js \
    src/ui/element/event.js \
    src/ui/element/events.js \
    src/ui/ui.js \
    src/control-mode/control-mode.js \
    src/control-mode/disabled.js \
    src/control-mode/map-observer.js \
    src/control-mode/pano.js \
    src/browser.js \
    src/config.js \
    src/interface.js > build/melown-v1.js

# copy css
cp src/browser.css build/melown-v1.css
