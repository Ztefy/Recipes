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
    //ingredients: Array<RecipeIngredient> = new Array<RecipeIngredient>();
    //methods: Array<RecipeMethod> = new Array<RecipeMethod>();
    //notes: Array<RecipeNote> = new Array<RecipeNote>();
    //cuisine: Array<RecipeCuisine> = new Array<RecipeCuisine>();
    //tags: Array<RecipeTag> = new Array<RecipeTag>();
    skillId: number;
    courseId: number;
    categoryId: number;
}

//export class RecipeIngredient {
    
//}