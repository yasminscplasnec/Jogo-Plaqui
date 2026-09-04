gdjs.inicioCode = {};
gdjs.inicioCode.localVariables = [];
gdjs.inicioCode.idToCallbackMap = new Map();
gdjs.inicioCode.GDfundoObjects1= [];
gdjs.inicioCode.GDfundoObjects2= [];
gdjs.inicioCode.GDestrelaObjects1= [];
gdjs.inicioCode.GDestrelaObjects2= [];
gdjs.inicioCode.GDjogarObjects1= [];
gdjs.inicioCode.GDjogarObjects2= [];
gdjs.inicioCode.GDsairObjects1= [];
gdjs.inicioCode.GDsairObjects2= [];
gdjs.inicioCode.GDPlaquiObjects1= [];
gdjs.inicioCode.GDPlaquiObjects2= [];
gdjs.inicioCode.GDvoltarObjects1= [];
gdjs.inicioCode.GDvoltarObjects2= [];
gdjs.inicioCode.GDacess_95243rio_9595brincoObjects1= [];
gdjs.inicioCode.GDacess_95243rio_9595brincoObjects2= [];
gdjs.inicioCode.GDacess_95243rio_9595faixaObjects1= [];
gdjs.inicioCode.GDacess_95243rio_9595faixaObjects2= [];
gdjs.inicioCode.GDacess_95243rio_9595luvaObjects1= [];
gdjs.inicioCode.GDacess_95243rio_9595luvaObjects2= [];
gdjs.inicioCode.GDacess_95243rio_9595oculosObjects1= [];
gdjs.inicioCode.GDacess_95243rio_9595oculosObjects2= [];
gdjs.inicioCode.GDsapato_9595sapatilhaObjects1= [];
gdjs.inicioCode.GDsapato_9595sapatilhaObjects2= [];
gdjs.inicioCode.GDsapato_9595sand_95225lia_9595Objects1= [];
gdjs.inicioCode.GDsapato_9595sand_95225lia_9595Objects2= [];
gdjs.inicioCode.GDsapato_9595tenisObjects1= [];
gdjs.inicioCode.GDsapato_9595tenisObjects2= [];
gdjs.inicioCode.GDvestido_9595laranjaObjects1= [];
gdjs.inicioCode.GDvestido_9595laranjaObjects2= [];
gdjs.inicioCode.GDvestido_9595lilasObjects1= [];
gdjs.inicioCode.GDvestido_9595lilasObjects2= [];
gdjs.inicioCode.GDvestido_9595rosaObjects1= [];
gdjs.inicioCode.GDvestido_9595rosaObjects2= [];
gdjs.inicioCode.GDblusa_9595azulObjects1= [];
gdjs.inicioCode.GDblusa_9595azulObjects2= [];
gdjs.inicioCode.GDblusa_9595rosaObjects1= [];
gdjs.inicioCode.GDblusa_9595rosaObjects2= [];
gdjs.inicioCode.GDblusa_9595vermelhaObjects1= [];
gdjs.inicioCode.GDblusa_9595vermelhaObjects2= [];
gdjs.inicioCode.GDpt_9595baixo_9595saiaObjects1= [];
gdjs.inicioCode.GDpt_9595baixo_9595saiaObjects2= [];
gdjs.inicioCode.GDpt_9595baixo_9595shortObjects1= [];
gdjs.inicioCode.GDpt_9595baixo_9595shortObjects2= [];


gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.inicioCode.GDjogarObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.inicioCode.GDjogarObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.inicioCode.GDjogarObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.inicioCode.GDsairObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.inicioCode.GDsairObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.inicioCode.GDsairObjects1});
gdjs.inicioCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "musica jogo plaqui.wav", true, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.inicioCode.GDjogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.inicioCode.GDjogarObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDjogarObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDjogarObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDjogarObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.inicioCode.GDjogarObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogarObjects1Objects, runtimeScene, true, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDjogarObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDjogarObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDjogarObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.inicioCode.GDsairObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDsairObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.inicioCode.GDsairObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDsairObjects1Objects, runtimeScene, true, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.inicioCode.GDsairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDsairObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}

}

};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDfundoObjects1.length = 0;
gdjs.inicioCode.GDfundoObjects2.length = 0;
gdjs.inicioCode.GDestrelaObjects1.length = 0;
gdjs.inicioCode.GDestrelaObjects2.length = 0;
gdjs.inicioCode.GDjogarObjects1.length = 0;
gdjs.inicioCode.GDjogarObjects2.length = 0;
gdjs.inicioCode.GDsairObjects1.length = 0;
gdjs.inicioCode.GDsairObjects2.length = 0;
gdjs.inicioCode.GDPlaquiObjects1.length = 0;
gdjs.inicioCode.GDPlaquiObjects2.length = 0;
gdjs.inicioCode.GDvoltarObjects1.length = 0;
gdjs.inicioCode.GDvoltarObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595brincoObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595brincoObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595faixaObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595faixaObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595luvaObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595luvaObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595oculosObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595oculosObjects2.length = 0;
gdjs.inicioCode.GDsapato_9595sapatilhaObjects1.length = 0;
gdjs.inicioCode.GDsapato_9595sapatilhaObjects2.length = 0;
gdjs.inicioCode.GDsapato_9595sand_95225lia_9595Objects1.length = 0;
gdjs.inicioCode.GDsapato_9595sand_95225lia_9595Objects2.length = 0;
gdjs.inicioCode.GDsapato_9595tenisObjects1.length = 0;
gdjs.inicioCode.GDsapato_9595tenisObjects2.length = 0;
gdjs.inicioCode.GDvestido_9595laranjaObjects1.length = 0;
gdjs.inicioCode.GDvestido_9595laranjaObjects2.length = 0;
gdjs.inicioCode.GDvestido_9595lilasObjects1.length = 0;
gdjs.inicioCode.GDvestido_9595lilasObjects2.length = 0;
gdjs.inicioCode.GDvestido_9595rosaObjects1.length = 0;
gdjs.inicioCode.GDvestido_9595rosaObjects2.length = 0;
gdjs.inicioCode.GDblusa_9595azulObjects1.length = 0;
gdjs.inicioCode.GDblusa_9595azulObjects2.length = 0;
gdjs.inicioCode.GDblusa_9595rosaObjects1.length = 0;
gdjs.inicioCode.GDblusa_9595rosaObjects2.length = 0;
gdjs.inicioCode.GDblusa_9595vermelhaObjects1.length = 0;
gdjs.inicioCode.GDblusa_9595vermelhaObjects2.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595saiaObjects1.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595saiaObjects2.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595shortObjects1.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595shortObjects2.length = 0;

gdjs.inicioCode.eventsList0(runtimeScene);
gdjs.inicioCode.GDfundoObjects1.length = 0;
gdjs.inicioCode.GDfundoObjects2.length = 0;
gdjs.inicioCode.GDestrelaObjects1.length = 0;
gdjs.inicioCode.GDestrelaObjects2.length = 0;
gdjs.inicioCode.GDjogarObjects1.length = 0;
gdjs.inicioCode.GDjogarObjects2.length = 0;
gdjs.inicioCode.GDsairObjects1.length = 0;
gdjs.inicioCode.GDsairObjects2.length = 0;
gdjs.inicioCode.GDPlaquiObjects1.length = 0;
gdjs.inicioCode.GDPlaquiObjects2.length = 0;
gdjs.inicioCode.GDvoltarObjects1.length = 0;
gdjs.inicioCode.GDvoltarObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595brincoObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595brincoObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595faixaObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595faixaObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595luvaObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595luvaObjects2.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595oculosObjects1.length = 0;
gdjs.inicioCode.GDacess_95243rio_9595oculosObjects2.length = 0;
gdjs.inicioCode.GDsapato_9595sapatilhaObjects1.length = 0;
gdjs.inicioCode.GDsapato_9595sapatilhaObjects2.length = 0;
gdjs.inicioCode.GDsapato_9595sand_95225lia_9595Objects1.length = 0;
gdjs.inicioCode.GDsapato_9595sand_95225lia_9595Objects2.length = 0;
gdjs.inicioCode.GDsapato_9595tenisObjects1.length = 0;
gdjs.inicioCode.GDsapato_9595tenisObjects2.length = 0;
gdjs.inicioCode.GDvestido_9595laranjaObjects1.length = 0;
gdjs.inicioCode.GDvestido_9595laranjaObjects2.length = 0;
gdjs.inicioCode.GDvestido_9595lilasObjects1.length = 0;
gdjs.inicioCode.GDvestido_9595lilasObjects2.length = 0;
gdjs.inicioCode.GDvestido_9595rosaObjects1.length = 0;
gdjs.inicioCode.GDvestido_9595rosaObjects2.length = 0;
gdjs.inicioCode.GDblusa_9595azulObjects1.length = 0;
gdjs.inicioCode.GDblusa_9595azulObjects2.length = 0;
gdjs.inicioCode.GDblusa_9595rosaObjects1.length = 0;
gdjs.inicioCode.GDblusa_9595rosaObjects2.length = 0;
gdjs.inicioCode.GDblusa_9595vermelhaObjects1.length = 0;
gdjs.inicioCode.GDblusa_9595vermelhaObjects2.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595saiaObjects1.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595saiaObjects2.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595shortObjects1.length = 0;
gdjs.inicioCode.GDpt_9595baixo_9595shortObjects2.length = 0;


return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
