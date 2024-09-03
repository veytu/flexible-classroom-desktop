import { RadioType, SceneType, TeacherImageType, TeachingSceneType } from '@app/type';
import premiumIcon from '@app/assets/service-type/fcr_premium.png';
import standardIcon from '@app/assets/service-type/fcr_standard.png';
import dayjs, { Dayjs } from 'dayjs';
import type { AgoraLatencyLevel } from 'agora-rte-sdk';
import { isElectron } from 'agora-rte-sdk/lib/core/utils/utils';

export const sceneTypeOptions: {
  label: string;
  description?: string;
  value: SceneType;
  className: string;
}[] = [
  {
    label: 'fcr_h5create_label_small_classroom',
    // description: 'fcr_create_label_small_classroom_description',
    value: SceneType.SmallClass,
    className: 'card-purple',
  },
  {
    label: 'fcr_h5create_label_lecture_hall',
    // description: 'fcr_create_label_lecture_hall_description',
    value: SceneType.LectureHall,
    className: 'card-red',
  },
  {
    label: 'fcr_h5create_label_1on1',
    // description: 'fcr_create_label_1on1_description',
    value: SceneType.OneOnOne,
    className: 'card-green',
  },
];

if (!isElectron()) {
  sceneTypeOptions.push({
    label: 'fcr_home_label_proctoring',
    // description: 'fcr_home_label_proctoring',
    value: SceneType.Proctoring,
    className: 'card-green',
  });

  sceneTypeOptions.push({
    label: 'fcr_home_label_class_mode_cloud_class',
    description: 'fcr_home_label_only_dark',
    value: SceneType.Scene,
    className: 'card-purple',
  });
  sceneTypeOptions.push({
    label: 'fcr_home_label_class_mode_ai_class',
    value: SceneType.AIPEOPLE,
    className: 'card-purple',
  });
}

export const serviceTypeOptions = [
  {
    label: 'fcr_create_label_service_type_RTC',
    description: 'fcr_create_label_latency_RTC',
    value: 2 as AgoraLatencyLevel,
    icon: premiumIcon,
  },
  {
    label: 'fcr_create_label_service_type_Standard',
    description: 'fcr_create_label_latency_Standard',
    value: 1 as AgoraLatencyLevel,
    icon: standardIcon,
  },
];
//老师形象数组
export const aiClassTeacherImageOptions = [
  {
    label: 'fcr_create_label_ai_people_teacher_image_none',
    status: RadioType.ENABLE,
    value: TeacherImageType.NONE,
  },
  {
    label: 'fcr_create_label_ai_people_teacher_image_cartoon',
    status: RadioType.WAIT_ON_LINE,
    value: TeacherImageType.CARTOON,
  },
  {
    label: 'fcr_create_label_ai_people_teacher_image_real',
    status: RadioType.WAIT_ON_LINE,
    value: TeacherImageType.REAL,
  },
];
//教学场景数组
export const aiClassTeacheingSceneOptions = [
  {
    label: 'fcr_create_label_ai_people_teaching_scene_practice_speak',
    status: RadioType.ENABLE,
    value: TeachingSceneType.PRACTICE_SPEAK,
  },
  {
    label: 'fcr_create_label_ai_people_teaching_scene_face_to_face',
    status: RadioType.WAIT_ON_LINE,
    value: TeachingSceneType.FACE_TO_FACE,
  },
];
//对话语言数组
export const aiClassDialogueTypeOptions = [
  {
    text: 'fcr_create_label_ai_people_dialogue_type_en_us',
    value: TeachingSceneType.PRACTICE_SPEAK.toString(),
  },
];

export const classroomBackgroundImagePath =
  'https://solutions-apaas.agora.io/demo/education/static/img/background_default1.png';

export const weekday = {
  0: 'fcr_create_option_time_selector_Sun',
  1: 'fcr_create_option_time_selector_Mon',
  2: 'fcr_create_option_time_selector_Tue',
  3: 'fcr_create_option_time_selector_Wed',
  4: 'fcr_create_option_time_selector_Thu',
  5: 'fcr_create_option_time_selector_Fri',
  6: 'fcr_create_option_time_selector_Sat',
};

export const TimeFormat = 'HH:mm';

export const computeEndTime = (date: Dayjs) => {
  return date.add(30, 'minute');
};

export const combDateTime = (date: Dayjs, time: Dayjs) => {
  const result = new Date(
    date.year(),
    date.month(),
    date.date(),
    time.hour(),
    time.minute(),
    time.second(),
  );
  return dayjs(result);
};

export type CreateFormValue = {
  name: string;
  date: Dayjs;
  time: Dayjs;
  link: string;
  endDate: Dayjs;
  endTime: Dayjs;
  nickName: string;
};
