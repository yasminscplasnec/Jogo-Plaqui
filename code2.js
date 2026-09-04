gdjs.prontoCode = {};
gdjs.prontoCode.localVariables = [];
gdjs.prontoCode.idToCallbackMap = new Map();
gdjs.prontoCode.GDfundo_9595showObjects1= [];
gdjs.prontoCode.GDfundo_9595showObjects2= [];
gdjs.prontoCode.GDfundo_9595showObjects3= [];
gdjs.prontoCode.GDpalanqueObjects1= [];
gdjs.prontoCode.GDpalanqueObjects2= [];
gdjs.prontoCode.GDpalanqueObjects3= [];
gdjs.prontoCode.GDletreiroObjects1= [];
gdjs.prontoCode.GDletreiroObjects2= [];
gdjs.prontoCode.GDletreiroObjects3= [];
gdjs.prontoCode.GDBubblesObjects1= [];
gdjs.prontoCode.GDBubblesObjects2= [];
gdjs.prontoCode.GDBubblesObjects3= [];
gdjs.prontoCode.GDsairObjects1= [];
gdjs.prontoCode.GDsairObjects2= [];
gdjs.prontoCode.GDsairObjects3= [];
gdjs.prontoCode.GDPlaquiObjects1= [];
gdjs.prontoCode.GDPlaquiObjects2= [];
gdjs.prontoCode.GDPlaquiObjects3= [];
gdjs.prontoCode.GDvoltarObjects1= [];
gdjs.prontoCode.GDvoltarObjects2= [];
gdjs.prontoCode.GDvoltarObjects3= [];
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects1= [];
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects2= [];
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects3= [];
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects1= [];
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects2= [];
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects3= [];
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects1= [];
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects2= [];
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects3= [];
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects1= [];
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects2= [];
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects3= [];
gdjs.prontoCode.GDsapato_9595sapatilhaObjects1= [];
gdjs.prontoCode.GDsapato_9595sapatilhaObjects2= [];
gdjs.prontoCode.GDsapato_9595sapatilhaObjects3= [];
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects1= [];
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2= [];
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects3= [];
gdjs.prontoCode.GDsapato_9595tenisObjects1= [];
gdjs.prontoCode.GDsapato_9595tenisObjects2= [];
gdjs.prontoCode.GDsapato_9595tenisObjects3= [];
gdjs.prontoCode.GDvestido_9595laranjaObjects1= [];
gdjs.prontoCode.GDvestido_9595laranjaObjects2= [];
gdjs.prontoCode.GDvestido_9595laranjaObjects3= [];
gdjs.prontoCode.GDvestido_9595lilasObjects1= [];
gdjs.prontoCode.GDvestido_9595lilasObjects2= [];
gdjs.prontoCode.GDvestido_9595lilasObjects3= [];
gdjs.prontoCode.GDvestido_9595rosaObjects1= [];
gdjs.prontoCode.GDvestido_9595rosaObjects2= [];
gdjs.prontoCode.GDvestido_9595rosaObjects3= [];
gdjs.prontoCode.GDblusa_9595azulObjects1= [];
gdjs.prontoCode.GDblusa_9595azulObjects2= [];
gdjs.prontoCode.GDblusa_9595azulObjects3= [];
gdjs.prontoCode.GDblusa_9595rosaObjects1= [];
gdjs.prontoCode.GDblusa_9595rosaObjects2= [];
gdjs.prontoCode.GDblusa_9595rosaObjects3= [];
gdjs.prontoCode.GDblusa_9595vermelhaObjects1= [];
gdjs.prontoCode.GDblusa_9595vermelhaObjects2= [];
gdjs.prontoCode.GDblusa_9595vermelhaObjects3= [];
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1= [];
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects2= [];
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects3= [];
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects1= [];
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2= [];
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects3= [];


gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.prontoCode.GDvoltarObjects1});
gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.prontoCode.GDvoltarObjects1});
gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.prontoCode.GDvoltarObjects1});
gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.prontoCode.GDsairObjects1});
gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.prontoCode.GDsairObjects1});
gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.prontoCode.GDsairObjects1});
gdjs.prontoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("cores").getChild("cor_amarela").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plaqui"), gdjs.prontoCode.GDPlaquiObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDPlaquiObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDPlaquiObjects2[i].getBehavior("Animation").setAnimationName("amarela");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("cores").getChild("cor_azul").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plaqui"), gdjs.prontoCode.GDPlaquiObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDPlaquiObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDPlaquiObjects2[i].getBehavior("Animation").setAnimationName("azul");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("cores").getChild("cor_laranja").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plaqui"), gdjs.prontoCode.GDPlaquiObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDPlaquiObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDPlaquiObjects2[i].getBehavior("Animation").setAnimationName("laranja");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("cores").getChild("cor_verde").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plaqui"), gdjs.prontoCode.GDPlaquiObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDPlaquiObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDPlaquiObjects2[i].getBehavior("Animation").setAnimationName("verde");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("cores").getChild("cor_vermelho").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plaqui"), gdjs.prontoCode.GDPlaquiObjects1);
{for(var i = 0, len = gdjs.prontoCode.GDPlaquiObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDPlaquiObjects1[i].getBehavior("Animation").setAnimationName("vermelha");
}
}
}

}


};gdjs.prontoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("vestidos").getChild("usando_vestido_laranja").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vestido_laranja"), gdjs.prontoCode.GDvestido_9595laranjaObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDvestido_9595laranjaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDvestido_9595laranjaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDvestido_9595laranjaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDvestido_9595laranjaObjects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("vestidos").getChild("usando_vestido_vermelho").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vestido_rosa"), gdjs.prontoCode.GDvestido_9595rosaObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDvestido_9595rosaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDvestido_9595rosaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDvestido_9595rosaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDvestido_9595rosaObjects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("vestidos").getChild("usando_vestido_lilas").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vestido_lilas"), gdjs.prontoCode.GDvestido_9595lilasObjects1);
{for(var i = 0, len = gdjs.prontoCode.GDvestido_9595lilasObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDvestido_9595lilasObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDvestido_9595lilasObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDvestido_9595lilasObjects1[i].activateBehavior("Arrastável", false);
}
}
}

}


};gdjs.prontoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("blusa").getChild("usando_blusa_azul").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blusa_azul"), gdjs.prontoCode.GDblusa_9595azulObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDblusa_9595azulObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDblusa_9595azulObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDblusa_9595azulObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDblusa_9595azulObjects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("blusa").getChild("usando_blusa_rosa").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blusa_rosa"), gdjs.prontoCode.GDblusa_9595rosaObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDblusa_9595rosaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDblusa_9595rosaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDblusa_9595rosaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDblusa_9595rosaObjects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("blusa").getChild("usando_blusa_vermelha").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blusa_vermelha"), gdjs.prontoCode.GDblusa_9595vermelhaObjects1);
{for(var i = 0, len = gdjs.prontoCode.GDblusa_9595vermelhaObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDblusa_9595vermelhaObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDblusa_9595vermelhaObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDblusa_9595vermelhaObjects1[i].activateBehavior("Arrastável", false);
}
}
}

}


};gdjs.prontoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("pt_de_baixo").getChild("usando_short").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pt_baixo_short"), gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("pt_de_baixo").getChild("usando_saia").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pt_baixo_saia"), gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1);
{for(var i = 0, len = gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1[i].activateBehavior("Arrastável", false);
}
}
}

}


};gdjs.prontoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("sapatos").getChild("usando_sapato_sandalia").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sapato_sandália_"), gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2);
{for(var i = 0, len = gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2.length ;i < len;++i) {
    gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2.length ;i < len;++i) {
    gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("sapatos").getChild("usando_sapato_sapatilha").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sapato_sapatilha"), gdjs.prontoCode.GDsapato_9595sapatilhaObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDsapato_9595sapatilhaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDsapato_9595sapatilhaObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDsapato_9595sapatilhaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDsapato_9595sapatilhaObjects2[i].activateBehavior("Arrastável", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("sapatos").getChild("usando_sapato_tenis").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sapato_tenis"), gdjs.prontoCode.GDsapato_9595tenisObjects1);
{for(var i = 0, len = gdjs.prontoCode.GDsapato_9595tenisObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDsapato_9595tenisObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prontoCode.GDsapato_9595tenisObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDsapato_9595tenisObjects1[i].activateBehavior("Arrastável", false);
}
}
}

}


};gdjs.prontoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("assessórios").getChild("usando_brincos").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acessório_brinco"), gdjs.prontoCode.GDacess_95243rio_9595brincoObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDacess_95243rio_9595brincoObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDacess_95243rio_9595brincoObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("assessórios").getChild("usando_faixa").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acessório_faixa"), gdjs.prontoCode.GDacess_95243rio_9595faixaObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDacess_95243rio_9595faixaObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDacess_95243rio_9595faixaObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("assessórios").getChild("usando_oculos").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acessório_oculos"), gdjs.prontoCode.GDacess_95243rio_9595oculosObjects2);
{for(var i = 0, len = gdjs.prontoCode.GDacess_95243rio_9595oculosObjects2.length ;i < len;++i) {
    gdjs.prontoCode.GDacess_95243rio_9595oculosObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("assessórios").getChild("usando_luvas").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acessório_luva"), gdjs.prontoCode.GDacess_95243rio_9595luvaObjects1);
{for(var i = 0, len = gdjs.prontoCode.GDacess_95243rio_9595luvaObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDacess_95243rio_9595luvaObjects1[i].hide(false);
}
}
}

}


};gdjs.prontoCode.eventsList6 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "plaqui_final.wav", true, 30, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.prontoCode.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDvoltarObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "principal");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "botao_SE.wav", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.prontoCode.GDvoltarObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDvoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.prontoCode.GDvoltarObjects1 */
{for(var i = 0, len = gdjs.prontoCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDvoltarObjects1[i].getBehavior("Effect").enableEffect("selecione", true);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.prontoCode.GDvoltarObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDvoltarObjects1Objects, runtimeScene, false, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.prontoCode.GDvoltarObjects1 */
{for(var i = 0, len = gdjs.prontoCode.GDvoltarObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDvoltarObjects1[i].getBehavior("Effect").enableEffect("selecione", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.prontoCode.GDsairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDsairObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "inicio");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "botao_SE.wav", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.prontoCode.GDsairObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDsairObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.prontoCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.prontoCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("selecione", true);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.prontoCode.GDsairObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prontoCode.mapOfGDgdjs_9546prontoCode_9546GDsairObjects1Objects, runtimeScene, false, true);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.prontoCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.prontoCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.prontoCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("selecione", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


gdjs.prontoCode.eventsList0(runtimeScene);
}


{


gdjs.prontoCode.eventsList1(runtimeScene);
}


{


gdjs.prontoCode.eventsList2(runtimeScene);
}


{


gdjs.prontoCode.eventsList3(runtimeScene);
}


{


gdjs.prontoCode.eventsList4(runtimeScene);
}


{


gdjs.prontoCode.eventsList5(runtimeScene);
}

}

};

gdjs.prontoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.prontoCode.GDfundo_9595showObjects1.length = 0;
gdjs.prontoCode.GDfundo_9595showObjects2.length = 0;
gdjs.prontoCode.GDfundo_9595showObjects3.length = 0;
gdjs.prontoCode.GDpalanqueObjects1.length = 0;
gdjs.prontoCode.GDpalanqueObjects2.length = 0;
gdjs.prontoCode.GDpalanqueObjects3.length = 0;
gdjs.prontoCode.GDletreiroObjects1.length = 0;
gdjs.prontoCode.GDletreiroObjects2.length = 0;
gdjs.prontoCode.GDletreiroObjects3.length = 0;
gdjs.prontoCode.GDBubblesObjects1.length = 0;
gdjs.prontoCode.GDBubblesObjects2.length = 0;
gdjs.prontoCode.GDBubblesObjects3.length = 0;
gdjs.prontoCode.GDsairObjects1.length = 0;
gdjs.prontoCode.GDsairObjects2.length = 0;
gdjs.prontoCode.GDsairObjects3.length = 0;
gdjs.prontoCode.GDPlaquiObjects1.length = 0;
gdjs.prontoCode.GDPlaquiObjects2.length = 0;
gdjs.prontoCode.GDPlaquiObjects3.length = 0;
gdjs.prontoCode.GDvoltarObjects1.length = 0;
gdjs.prontoCode.GDvoltarObjects2.length = 0;
gdjs.prontoCode.GDvoltarObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects3.length = 0;
gdjs.prontoCode.GDsapato_9595sapatilhaObjects1.length = 0;
gdjs.prontoCode.GDsapato_9595sapatilhaObjects2.length = 0;
gdjs.prontoCode.GDsapato_9595sapatilhaObjects3.length = 0;
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects1.length = 0;
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2.length = 0;
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects3.length = 0;
gdjs.prontoCode.GDsapato_9595tenisObjects1.length = 0;
gdjs.prontoCode.GDsapato_9595tenisObjects2.length = 0;
gdjs.prontoCode.GDsapato_9595tenisObjects3.length = 0;
gdjs.prontoCode.GDvestido_9595laranjaObjects1.length = 0;
gdjs.prontoCode.GDvestido_9595laranjaObjects2.length = 0;
gdjs.prontoCode.GDvestido_9595laranjaObjects3.length = 0;
gdjs.prontoCode.GDvestido_9595lilasObjects1.length = 0;
gdjs.prontoCode.GDvestido_9595lilasObjects2.length = 0;
gdjs.prontoCode.GDvestido_9595lilasObjects3.length = 0;
gdjs.prontoCode.GDvestido_9595rosaObjects1.length = 0;
gdjs.prontoCode.GDvestido_9595rosaObjects2.length = 0;
gdjs.prontoCode.GDvestido_9595rosaObjects3.length = 0;
gdjs.prontoCode.GDblusa_9595azulObjects1.length = 0;
gdjs.prontoCode.GDblusa_9595azulObjects2.length = 0;
gdjs.prontoCode.GDblusa_9595azulObjects3.length = 0;
gdjs.prontoCode.GDblusa_9595rosaObjects1.length = 0;
gdjs.prontoCode.GDblusa_9595rosaObjects2.length = 0;
gdjs.prontoCode.GDblusa_9595rosaObjects3.length = 0;
gdjs.prontoCode.GDblusa_9595vermelhaObjects1.length = 0;
gdjs.prontoCode.GDblusa_9595vermelhaObjects2.length = 0;
gdjs.prontoCode.GDblusa_9595vermelhaObjects3.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects2.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects3.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects1.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects3.length = 0;

gdjs.prontoCode.eventsList6(runtimeScene);
gdjs.prontoCode.GDfundo_9595showObjects1.length = 0;
gdjs.prontoCode.GDfundo_9595showObjects2.length = 0;
gdjs.prontoCode.GDfundo_9595showObjects3.length = 0;
gdjs.prontoCode.GDpalanqueObjects1.length = 0;
gdjs.prontoCode.GDpalanqueObjects2.length = 0;
gdjs.prontoCode.GDpalanqueObjects3.length = 0;
gdjs.prontoCode.GDletreiroObjects1.length = 0;
gdjs.prontoCode.GDletreiroObjects2.length = 0;
gdjs.prontoCode.GDletreiroObjects3.length = 0;
gdjs.prontoCode.GDBubblesObjects1.length = 0;
gdjs.prontoCode.GDBubblesObjects2.length = 0;
gdjs.prontoCode.GDBubblesObjects3.length = 0;
gdjs.prontoCode.GDsairObjects1.length = 0;
gdjs.prontoCode.GDsairObjects2.length = 0;
gdjs.prontoCode.GDsairObjects3.length = 0;
gdjs.prontoCode.GDPlaquiObjects1.length = 0;
gdjs.prontoCode.GDPlaquiObjects2.length = 0;
gdjs.prontoCode.GDPlaquiObjects3.length = 0;
gdjs.prontoCode.GDvoltarObjects1.length = 0;
gdjs.prontoCode.GDvoltarObjects2.length = 0;
gdjs.prontoCode.GDvoltarObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595brincoObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595faixaObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595luvaObjects3.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects1.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects2.length = 0;
gdjs.prontoCode.GDacess_95243rio_9595oculosObjects3.length = 0;
gdjs.prontoCode.GDsapato_9595sapatilhaObjects1.length = 0;
gdjs.prontoCode.GDsapato_9595sapatilhaObjects2.length = 0;
gdjs.prontoCode.GDsapato_9595sapatilhaObjects3.length = 0;
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects1.length = 0;
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects2.length = 0;
gdjs.prontoCode.GDsapato_9595sand_95225lia_9595Objects3.length = 0;
gdjs.prontoCode.GDsapato_9595tenisObjects1.length = 0;
gdjs.prontoCode.GDsapato_9595tenisObjects2.length = 0;
gdjs.prontoCode.GDsapato_9595tenisObjects3.length = 0;
gdjs.prontoCode.GDvestido_9595laranjaObjects1.length = 0;
gdjs.prontoCode.GDvestido_9595laranjaObjects2.length = 0;
gdjs.prontoCode.GDvestido_9595laranjaObjects3.length = 0;
gdjs.prontoCode.GDvestido_9595lilasObjects1.length = 0;
gdjs.prontoCode.GDvestido_9595lilasObjects2.length = 0;
gdjs.prontoCode.GDvestido_9595lilasObjects3.length = 0;
gdjs.prontoCode.GDvestido_9595rosaObjects1.length = 0;
gdjs.prontoCode.GDvestido_9595rosaObjects2.length = 0;
gdjs.prontoCode.GDvestido_9595rosaObjects3.length = 0;
gdjs.prontoCode.GDblusa_9595azulObjects1.length = 0;
gdjs.prontoCode.GDblusa_9595azulObjects2.length = 0;
gdjs.prontoCode.GDblusa_9595azulObjects3.length = 0;
gdjs.prontoCode.GDblusa_9595rosaObjects1.length = 0;
gdjs.prontoCode.GDblusa_9595rosaObjects2.length = 0;
gdjs.prontoCode.GDblusa_9595rosaObjects3.length = 0;
gdjs.prontoCode.GDblusa_9595vermelhaObjects1.length = 0;
gdjs.prontoCode.GDblusa_9595vermelhaObjects2.length = 0;
gdjs.prontoCode.GDblusa_9595vermelhaObjects3.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects1.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects2.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595saiaObjects3.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects1.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects2.length = 0;
gdjs.prontoCode.GDpt_9595baixo_9595shortObjects3.length = 0;


return;

}

gdjs['prontoCode'] = gdjs.prontoCode;
