export type Exercise = {
  id: string;
  name: string;
  targetMuscles: string[];
  equipment: string[];
  difficulty: "入门" | "中级" | "进阶";
  keyCues: string[];
  commonMistakes: string[];
  tags: string[];
};

export const exercises: Exercise[] = [
  {
    id: "barbell-bench-press", name: "杠铃卧推", targetMuscles: ["胸大肌", "肱三头肌", "前三角肌"], equipment: ["杠铃", "卧推凳"], difficulty: "中级",
    keyCues: ["双脚踩稳，肩胛轻微后收并贴住凳面。", "握距以底部小臂接近垂直为参考。", "控制杠铃下放至胸部中下段附近。", "平稳推起，臀部保持接触凳面。"],
    commonMistakes: ["肩膀耸起、肩胛失稳。", "杠铃快速撞击胸口。", "手腕过度后折或臀部离凳。"], tags: ["胸", "推", "复合动作", "杠铃"],
  },
  {
    id: "dumbbell-bench-press", name: "哑铃卧推", targetMuscles: ["胸大肌", "肱三头肌", "前三角肌"], equipment: ["哑铃", "卧推凳"], difficulty: "中级",
    keyCues: ["躺稳后保持肩胛稳定。", "手腕位于肘部上方。", "下放至舒适且可控的深度。", "平稳推起，左右轨迹一致。"],
    commonMistakes: ["下放过深导致肩前侧不适。", "哑铃左右晃动或互撞。", "手腕向后折。"], tags: ["胸", "推", "哑铃", "复合动作"],
  },
  {
    id: "push-up", name: "俯卧撑", targetMuscles: ["胸大肌", "肱三头肌", "核心"], equipment: ["徒手"], difficulty: "入门",
    keyCues: ["双手略宽于肩，手指自然张开。", "头、躯干和髋部保持一条线。", "屈肘下放，胸部接近地面后推回。", "收紧腹部与臀部，保持身体稳定。"],
    commonMistakes: ["塌腰或臀部过度翘起。", "手肘完全向两侧张开。", "动作幅度过小或速度失控。"], tags: ["胸", "推", "徒手", "入门"],
  },
  {
    id: "lat-pulldown", name: "高位下拉", targetMuscles: ["背阔肌", "大圆肌", "肱二头肌"], equipment: ["高位下拉器"], difficulty: "入门",
    keyCues: ["大腿固定，躯干轻微后倾。", "先让肩膀远离耳朵，再驱动手肘向下。", "把手拉向上胸附近并控制回程。"],
    commonMistakes: ["身体大幅后仰借惯性。", "耸肩或只用手臂发力。", "把横杆拉到颈后。"], tags: ["背", "拉", "器械", "复合动作"],
  },
  {
    id: "seated-row", name: "坐姿绳索划船", targetMuscles: ["菱形肌", "中斜方肌", "背阔肌", "肱二头肌"], equipment: ["坐姿划船器"], difficulty: "入门",
    keyCues: ["坐稳并保持脊柱自然中立。", "肩胛向后移动，带动手肘向后。", "把手拉向上腹部附近。", "回程控制躯干，不随重量前后摆动。"],
    commonMistakes: ["弓背或过度挺腰。", "身体前后摇摆借力。", "耸肩拉绳。"], tags: ["背", "拉", "器械", "复合动作"],
  },
  {
    id: "one-arm-dumbbell-row", name: "单臂哑铃划船", targetMuscles: ["背阔肌", "菱形肌", "中斜方肌"], equipment: ["哑铃", "训练凳"], difficulty: "中级",
    keyCues: ["一手一膝支撑在凳面，背部保持平直。", "哑铃沿身体侧面向髋部方向拉起。", "顶端短暂停顿，再缓慢下放。"],
    commonMistakes: ["身体旋转或耸肩甩起哑铃。", "哑铃拉向胸口而非髋部。", "下放时失去躯干稳定。"], tags: ["背", "拉", "哑铃", "单侧"],
  },
  {
    id: "dumbbell-shoulder-press", name: "哑铃肩推", targetMuscles: ["三角肌前束", "三角肌中束", "肱三头肌"], equipment: ["哑铃", "训练凳"], difficulty: "中级",
    keyCues: ["坐稳或站稳，肋骨不要向前翻起。", "起始时前臂接近垂直，手腕中立。", "沿自然轨迹将哑铃推过头顶。", "控制下放至肩部附近。"],
    commonMistakes: ["腰部过度后仰。", "手腕折弯或肘部位置不适。", "下放失控。"], tags: ["肩", "推", "哑铃", "复合动作"],
  },
  {
    id: "lateral-raise", name: "哑铃侧平举", targetMuscles: ["三角肌中束"], equipment: ["哑铃"], difficulty: "入门",
    keyCues: ["双脚站稳，手肘轻微弯曲。", "手臂向两侧抬至肩部附近。", "选择轻重量，控制上举和下放。", "肩膀放松，避免耸肩。"],
    commonMistakes: ["使用过重哑铃并摆动借力。", "耸肩抬手。", "下放时突然卸力。"], tags: ["肩", "孤立动作", "哑铃", "中束"],
  },
  {
    id: "goblet-squat", name: "高脚杯深蹲", targetMuscles: ["股四头肌", "臀大肌", "核心"], equipment: ["哑铃或壶铃"], difficulty: "入门",
    keyCues: ["双脚约与肩同宽，脚尖自然略向外。", "负重贴近胸前，躯干稳定。", "屈髋屈膝下蹲，膝盖方向与脚尖一致。", "脚掌稳定触地，控制站起。"],
    commonMistakes: ["膝盖内扣或脚跟离地。", "弓背、塌腰或失去平衡。", "负重远离身体。"], tags: ["腿", "下肢", "深蹲", "入门"],
  },
  {
    id: "leg-press", name: "器械腿举", targetMuscles: ["股四头肌", "臀大肌", "腘绳肌"], equipment: ["腿举机"], difficulty: "入门",
    keyCues: ["臀部和背部贴住靠垫。", "膝盖方向与脚尖大致一致。", "在腰背不卷起的范围内下放。", "推起时膝盖保留微屈。"],
    commonMistakes: ["下放过深导致骨盆卷起。", "膝盖内扣或脚掌不稳。", "猛烈锁死膝关节或反弹借力。"], tags: ["腿", "下肢", "器械", "复合动作"],
  },
  {
    id: "romanian-deadlift", name: "罗马尼亚硬拉", targetMuscles: ["腘绳肌", "臀大肌", "竖脊肌"], equipment: ["杠铃或哑铃"], difficulty: "中级",
    keyCues: ["膝盖微屈，重量贴近大腿。", "以髋部向后移动为主，沿腿前侧下放。", "保持脊柱中立，在可控范围内下降。", "臀部向前伸展站起，不要腰部后仰收尾。"],
    commonMistakes: ["做成深蹲，膝盖过度前移。", "弓背或超出活动范围下放。", "负重远离身体。"], tags: ["腿", "臀", "髋铰链", "复合动作"],
  },
  {
    id: "dead-bug", name: "死虫式", targetMuscles: ["腹横肌", "腹直肌", "核心稳定肌群"], equipment: ["徒手", "瑜伽垫"], difficulty: "入门",
    keyCues: ["仰卧，髋膝抬起，手臂朝上。", "轻收腹部，保持腰背稳定。", "对侧手脚缓慢伸展，幅度以躯干不晃为限。", "回到起始位置后换边并平稳呼吸。"],
    commonMistakes: ["伸展过度导致下背拱起。", "动作过快或憋气。", "手脚不协调、躯干晃动。"], tags: ["核心", "稳定", "徒手", "抗伸展"],
  },
];
