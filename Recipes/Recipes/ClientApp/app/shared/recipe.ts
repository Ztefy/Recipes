export class Recipe {

    recipeId: number;
    recipeName: string;
    recipeImage: string;
    portions: number;
    rating: number;
    timings: Array<RecipeTiming> = new Array<RecipeTiming>();
    nutrition: Array<RecipeNutrition> = new Array<RecipeNutrition>();
    ingredients: Array<RecipeIngredient> = new Array<RecipeIngredient>();
    methods: Array<RecipeMethod> = new Array<RecipeMethod>();
    notes: Array<RecipeNote> = new Array<RecipeNote>();
    cuisine: Array<RecipeCuisine> = new Array<RecipeCuisine>();
    tags: Array<RecipeTag> = new Array<RecipeTag>();
    skillId: Skill;
    courseId: Course;
    categoryId: Category;
}

export class RecipeTiming {
    id: number;
    timingTypeId: TimingType;
    quantity: number;
    timeMeasId: TimeMeasurement;
    recipeId: number;
}

export class RecipeNutrition {
    id: number;
    nutritionId: Nutrition;
    quantity: string;
    nutrMeasId: NutrMeasurement;
    recipeId: number;
}

export class RecipeIngredient {
    id: number;
    ingredientId: Ingredient;
    quantity: number;
    ingrMeasId?: IngrMeasurement;
    ingPrepId?: IngrPreparation;
    recipeId: number;
}

export class RecipeMethod {
    id: number;
    stepNumber: number;
    method: string;
    recipeId: number;
}

export class RecipeNote {
    id: number;
    note: string;
    recipeId: number;
}

export class RecipeCuisine {
    cuisineId: number;
    name: string;
}

export class RecipeTag {
    id: number;
    tagId: number;
    recipeId: number;
}

export class Skill {
    skillId: number;
    skillLevel: string;
}

export class Course {
    courseId: number;
    name: string;
}

export class Category {
    categoryId: number;
    name: string;
}

export class Nutrition {
    nutritionId: number;
    type: string;
}

export class NutrMeasurement {
    nutrMeasId: number;
    measurement: string;
}
export class TimingType {
    timeTypeId: number;
    type: string;
}

export class TimeMeasurement {
    timeMeasId: number;
    measurement: string;
}

export class Ingredient {
    ingredientId: number;
    name: string;
}

export class IngrMeasurement {
    ingrMeasId: number;
    measurement: string;
}

export class IngrPreparation {
    ingPrepId: number;
    preparation: string;
}