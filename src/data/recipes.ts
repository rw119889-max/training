export type Recipe = {
  id: string;
  name: string;
  timeMinutes: number;
  proteinG: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
};

/** 单人份营养为估算值；食材品牌、份量和烹饪方式会造成差异。 */
export const recipes: Recipe[] = [
  {
    id: "greek-yogurt-oats",
    name: "希腊酸奶燕麦碗",
    timeMinutes: 5,
    proteinG: 31,
    ingredients: ["无糖希腊酸奶 200g", "即食燕麦 40g", "香蕉 80g", "奇亚籽 5g"],
    steps: ["燕麦放入碗中，加入希腊酸奶。", "香蕉切片铺在表面，撒上奇亚籽即可。"],
    tags: ["早餐", "高蛋白", "快手", "免开火", "增肌"],
  },
  {
    id: "tuna-rice-bowl",
    name: "金枪鱼糙米饭碗",
    timeMinutes: 8,
    proteinG: 32,
    ingredients: ["水浸金枪鱼 120g", "熟糙米饭 150g", "黄瓜 80g", "无糖希腊酸奶 30g"],
    steps: ["熟糙米饭加热至热透。", "沥干金枪鱼，黄瓜切丁。", "将金枪鱼和黄瓜放在米饭上，淋少量酸奶调味。"],
    tags: ["午餐", "高蛋白", "快手", "减脂"],
  },
  {
    id: "chicken-salad",
    name: "鸡胸肉即食沙拉",
    timeMinutes: 12,
    proteinG: 38,
    ingredients: ["熟鸡胸肉 150g", "混合生菜 100g", "小番茄 100g", "玉米粒 50g", "橄榄油 5g"],
    steps: ["鸡胸肉煎熟或选用即食鸡胸肉，切片。", "生菜、小番茄洗净，和玉米装碗。", "放上鸡胸肉，淋少量橄榄油拌匀。"],
    tags: ["午餐", "高蛋白", "快手", "减脂"],
  },
  {
    id: "shrimp-egg-rice",
    name: "虾仁鸡蛋快手炒饭",
    timeMinutes: 15,
    proteinG: 32,
    ingredients: ["熟米饭 150g", "虾仁 120g", "鸡蛋 1个", "冷冻豌豆胡萝卜 80g", "食用油 5g"],
    steps: ["虾仁解冻擦干，鸡蛋打散。", "少油炒熟鸡蛋和虾仁，加入冷冻蔬菜。", "加入熟米饭翻炒至整体热透，按口味少量调味。"],
    tags: ["午餐", "晚餐", "高蛋白", "快手", "训练后"],
  },
  {
    id: "tofu-edamame-bowl",
    name: "豆腐毛豆蛋白碗",
    timeMinutes: 15,
    proteinG: 29,
    ingredients: ["老豆腐 200g", "熟毛豆仁 100g", "西兰花 100g", "芝麻 3g", "低钠酱油 5ml"],
    steps: ["西兰花和毛豆煮熟或微波加热至熟透。", "豆腐切块煎至表面微黄或蒸热。", "食材装碗，淋少量低钠酱油并撒芝麻。"],
    tags: ["午餐", "晚餐", "植物蛋白", "快手", "增肌"],
  },
  {
    id: "salmon-couscous",
    name: "三文鱼速熟库斯库斯",
    timeMinutes: 18,
    proteinG: 34,
    ingredients: ["三文鱼 130g", "库斯库斯 60g", "西葫芦 100g", "柠檬汁 5ml"],
    steps: ["库斯库斯加沸水焖约 5 分钟后拨松。", "三文鱼切块煎熟，西葫芦切片后同锅炒熟。", "鱼和西葫芦铺在库斯库斯上，挤少量柠檬汁。"],
    tags: ["晚餐", "高蛋白", "快手", "训练后"],
  },
  {
    id: "beef-soba",
    name: "牛肉青菜荞麦面",
    timeMinutes: 18,
    proteinG: 33,
    ingredients: ["瘦牛肉片 120g", "荞麦面 70g", "小白菜 100g", "低钠酱油 8ml"],
    steps: ["荞麦面按包装说明煮熟，最后加入小白菜烫熟。", "另起锅将牛肉片快速炒至全熟。", "面菜沥水装碗，放入牛肉并以少量酱油调味。"],
    tags: ["午餐", "晚餐", "高蛋白", "快手", "增肌"],
  },
  {
    id: "chicken-chickpea-wrap",
    name: "鸡胸鹰嘴豆全麦卷",
    timeMinutes: 10,
    proteinG: 35,
    ingredients: ["熟鸡胸肉 120g", "全麦卷饼 1张", "熟鹰嘴豆 50g", "生菜 40g", "无糖希腊酸奶 30g"],
    steps: ["鸡胸肉切条，鹰嘴豆沥干，酸奶加黑胡椒调味。", "将鸡肉、鹰嘴豆和生菜放到卷饼中央。", "淋上酸奶酱，卷紧即可。"],
    tags: ["午餐", "便携", "高蛋白", "快手", "减脂"],
  },
];
