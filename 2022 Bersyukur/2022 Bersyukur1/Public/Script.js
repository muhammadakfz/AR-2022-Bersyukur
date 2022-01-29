// -----JS CODE-----
//@input Component.VFXComponent effect
//@input Asset.Texture textures

script.createEvent("UpdateEvent").bind(Update);

var transform = script.getSceneObject().getTransform();

script.effect.asset = script.effect.asset.clone();

function Update() {
    script.effect.asset.properties["Position"] = transform.getWorldPosition();
    script.effect.asset.properties["Forward"] = transform.forward;
    script.effect.asset.properties["Texture"] = transform.set;
}