// -----JS CODE-----
//@input Component.VFXComponent effect
//@input float radius
//@input vec3 scale
//@input  sepia
script.createEvent("UpdateEvent").bind(Update);

var transform = script.getSceneObject().getTransform();

script.effect.asset = script.effect.asset.clone();

function Update() {
    script.effect.asset.properties["Position"] = transform.getWorldPosition();
    script.effect.asset.properties["Forward"] = transform.forward;
    script.effect.asset.properties["Radius"] = transform.radius;
    script.effect.asset.properties["Scale"] = transform.scale;
    script.effect.asset.properties["Sepia"] = transform.sepia;
}