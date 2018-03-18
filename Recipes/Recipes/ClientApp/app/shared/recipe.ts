export class Recipe {
    recipeId: number;
    recipeName: string;
    recipeImage: string;
    portions: number;
    rating: number;
    prepTime: string;
    cookTime: string;
    calories: number;
    fat: number;
    saturated: number;
    carbohydrates: number;
    sugars: number;
    fibre: number;
    protein: number;
    salt: number;
    ingredients: Array<RecipeIngredient> = new Array<RecipeIngredient>();
    methods: Array<RecipeMethod> = new Array <RecipeMethod>();
    notes: Array<RecipeNote> = new Array <RecipeNote>();
    cuisine: Array<RecipeCuisine> = new Array<RecipeCuisine>();
    tags: Array<RecipeTag> = new Array<RecipeTag>();
    skillId: number;
    skillSkillLevel: string;
    courseId: number;
    courseName: string;
    categoryId: number;
    categoryName: string;
}

export class RecipeIngredient {
    id: number;
    quantity: number;
    ingredientId: number;
    ingredientName: string;
    measurementId: number;
    measurementMeasurement: string;
    preparationId: number;
    preparationPreparation: string;
}

export class RecipeMethod {
    id: number;
    stepNumber: number;
    method: string;
}

export class RecipeNote {
    id: number;
    note: string;
}

export class RecipeCuisine {
    id: number;
    cuisineId: number;
    cuisineName: string;
}

export class RecipeTag {
    id: number;
    tagId: number;
    tagName: string;
}