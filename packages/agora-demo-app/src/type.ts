import type { EduRoomTypeEnum } from 'agora-edu-core';

export enum SceneType {
  OneOnOne = 0,
  LectureHall = 2,
  SmallClass = 4,
  Proctoring = 6,
  Scene = 10,
  AIPEOPLE = 11,
}
export enum FcrUISceneSdk {
  AgoraEduSdk = 'agora-edu-sdk',
  AgoraProctorSdk = 'agora-proctor-sdk',
  FcrUIScene = 'fcr-ui-scene',
}
export enum LoginType {
  NoNeedLogin = 0,
  NeedLogin = 1,
}
/**
 * 老师形象
 */
export enum TeacherImageType {
  NONE = 0,//无形象
  CARTOON = 1,//卡通形象
  REAL = 2,//真人形象
}
/**
 * 教学场景
 */
export enum TeachingSceneType {
  PRACTICE_SPEAK = 0,//Ai口语对练
  FACE_TO_FACE = 1,//Ai面试
}
/**
 * 对话语言
 */
export enum AiDialogueType {
  EN_US = 0,//英语
}
/**
 * 选择类型
 */
export enum RadioType {
  DISABLE = 0,//禁用
  ENABLE = 1,//启用
  WAIT_ON_LINE = 2,//待上线
}

export const FcrUISceneSdkMap = {
  [SceneType.OneOnOne | SceneType.LectureHall | SceneType.SmallClass]: FcrUISceneSdk.AgoraEduSdk,
  [SceneType.Proctoring]: FcrUISceneSdk.AgoraProctorSdk,
  [SceneType.Scene]: FcrUISceneSdk.FcrUIScene,
};
export const FcrRoomType: Record<SceneType, EduRoomTypeEnum> = {
  [SceneType.OneOnOne]: 0,
  [SceneType.LectureHall]: 2,
  [SceneType.SmallClass]: 4,
  [SceneType.Proctoring]: 6,
  [SceneType.Scene]: 10,
  [SceneType.AIPEOPLE]: 11,
};
