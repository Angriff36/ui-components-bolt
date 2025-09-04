import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Input,
  Badge,
  LoadingSpinner,
  FileUpload
} from '../src';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Plus,
  Save,
  Camera,
  Video,
  Utensils,
  Clock,
  Users,
  X
} from 'lucide-react';

function ComponentDemo() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    search: '',
    recipeName: '',
    cookTime: '',
    servings: ''
  });

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleRecipe = (recipeName: string) => {
    setSavedRecipes(prev => 
      prev.includes(recipeName) 
        ? prev.filter(name => name !== recipeName)
        : [...prev, recipeName]
    );
  };

  const handleAddRecipe = () => {
    if (formData.recipeName.trim()) {
      console.log('Adding recipe:', {
        name: formData.recipeName,
        cookTime: formData.cookTime,
        servings: formData.servings
      });
      // Reset form
      setFormData(prev => ({
        ...prev,
        recipeName: '',
        cookTime: '',
        servings: ''
      }));
      setShowAddRecipe(false);
      // Show success message
      alert(`Recipe "${formData.recipeName}" has been added!`);
    }
  };

  const handleFileUpload = (files: File[]) => {
    console.log('Files uploaded:', files);
    alert(`${files.length} file(s) uploaded successfully!`);
  };

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2">
              🍳 Prep Chef UI Components
            </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Interactive component library for recipe management
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="primary"
                onClick={() => {
                  console.log('Add Recipe clicked, current state:', showAddRecipe);
                  setShowAddRecipe(!showAddRecipe);
                }}
                icon={<Plus className="w-4 h-4" />}
                size="sm"
              >
                {showAddRecipe ? 'Cancel' : 'Add Recipe'}
              </Button>
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                size="sm"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </Button>
            </div>
          </div>
        </div>

        {/* Add Recipe Form */}
        {showAddRecipe && (
          <section className="mb-12">
            <Card variant="elevated" className="max-w-4xl mx-auto">
              <CardHeader 
                title="✨ Add New Recipe" 
                subtitle="Create a delicious new recipe and share it with the community"
                action={
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowAddRecipe(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                }
              />
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="grid gap-4">
                    <Input
                      label="Recipe Name"
                      placeholder="e.g., Grandma's Famous Chocolate Chip Cookies"
                      value={formData.recipeName}
                      onChange={(e) => setFormData({...formData, recipeName: e.target.value})}
                      leftIcon={<Utensils className="w-4 h-4" />}
                      variant="filled"
                      inputSize="lg"
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Cook Time"
                        placeholder="e.g., 30 mins"
                        value={formData.cookTime}
                        onChange={(e) => setFormData({...formData, cookTime: e.target.value})}
                        leftIcon={<Clock className="w-4 h-4" />}
                        variant="filled"
                      />
                      <Input
                        label="Servings"
                        type="number"
                        placeholder="e.g., 4"
                        value={formData.servings}
                        onChange={(e) => setFormData({...formData, servings: e.target.value})}
                        leftIcon={<Users className="w-4 h-4" />}
                        variant="filled"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                      📸 Recipe Media
                    </label>
                    <FileUpload
                      variant="recipe"
                      accept="image/*,video/*"
                      multiple={true}
                      maxSize={50}
                      onFilesChange={handleFileUpload}
                      label="📱 Add photos or videos"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                <div className="flex gap-3 w-full">
                  <Button 
                  variant="outline" 
                  onClick={() => setShowAddRecipe(false)}
                    size="lg"
                    className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleAddRecipe}
                  icon={<Save className="w-4 h-4" />}
                  disabled={!formData.recipeName.trim()}
                    size="lg"
                    className="flex-1"
                >
                  Save Recipe
                </Button>
                </div>
              </CardFooter>
            </Card>
          </section>
        )}

        <div className="space-y-12">
          {/* Interactive Recipe Management */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              🍽️ Recipe Collection
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card interactive className="hover:scale-105 transition-transform duration-300" onClick={() => toggleRecipe('Avocado Toast')}>
                <CardHeader 
                  title="🥑 Avocado Toast"
                  subtitle="Healthy • 5 mins • ⭐ 4.9"
                  action={
                    <div className="flex gap-2">
                      <Badge variant="success" size="sm">Vegan</Badge>
                      <Badge variant="info" size="sm">Quick</Badge>
                    </div>
                  }
                />
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">🥑</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Simple yet delicious avocado toast with a twist. Perfect for breakfast or a light lunch.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>👥 2 servings</span>
                    <span>⏱️ 5 mins</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={savedRecipes.includes('Avocado Toast') ? "primary" : "outline"}
                    size="md" 
                    fullWidth
                    icon={<Heart className="w-4 h-4" />}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRecipe('Avocado Toast');
                    }}
                  >
                    {savedRecipes.includes('Avocado Toast') ? 'Saved!' : 'Save Recipe'}
                  </Button>
                </CardFooter>
              </Card>

              <Card interactive className="hover:scale-105 transition-transform duration-300">
                <CardHeader 
                  title="📸 Upload Recipe Media"
                  subtitle="Add stunning photos or videos"
                />
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                  <FileUpload
                    variant="compact"
                    accept="image/*"
                    multiple={true}
                    maxSize={10}
                    onFilesChange={(files) => {
                      console.log('Recipe images:', files);
                      alert(`${files.length} photo(s) uploaded successfully! 📸`);
                    }}
                    label="Upload recipe photos"
                  />
                </CardContent>
                <CardFooter>
                  <Button size="md" variant="primary" fullWidth>
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </Button>
                </CardFooter>
              </Card>

              <Card interactive className="hover:scale-105 transition-transform duration-300">
                <CardHeader 
                  title="🎥 Cooking Video"
                  subtitle="Step-by-step tutorial"
                />
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-red-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <FileUpload
                    variant="compact"
                    accept="video/*"
                    multiple={false}
                    maxSize={50}
                    onFilesChange={(files) => {
                      console.log('Recipe video:', files);
                      alert(`Video "${files[0]?.name}" uploaded successfully! 🎥`);
                    }}
                    label="Upload cooking video"
                  />
                </CardContent>
                <CardFooter>
                  <Button size="md" variant="primary" fullWidth>
                    <Video className="w-4 h-4" />
                    Record Video
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Buttons Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              🎛️ Interactive Components
            </h2>
            <div className="grid gap-6">
              {/* Recipe Action Buttons */}
              <Card variant="elevated">
                <CardHeader 
                  title="🚀 Recipe Action Buttons" 
                  subtitle="Click any button to see it in action"
                />
                <CardContent>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      variant="primary"
                      size="lg"
                      onClick={() => alert('Starting cooking mode!')}
                      icon={<Utensils className="w-4 h-4" />}
                    >
                      Start Cooking
                    </Button>
                    <Button 
                      variant="secondary"
                      size="lg"
                      onClick={() => alert('Adding to shopping list!')}
                      icon={<ShoppingCart className="w-4 h-4" />}
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={() => alert('Sharing recipe!')}
                    >
                      Share Recipe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Button States */}
              <Card variant="elevated">
                <CardHeader 
                  title="⚡ Button States & Loading" 
                  subtitle="See different button states in action"
                />
                <CardContent>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      loading={loading} 
                      onClick={handleSubmit}
                      variant="primary"
                      size="lg"
                    >
                      {loading ? 'Saving Recipe...' : 'Save Recipe'}
                    </Button>
                    <Button 
                      icon={<Heart className="w-4 h-4" />} 
                      variant="outline"
                      onClick={() => alert('Recipe liked!')}
                      size="lg"
                    >
                      Like Recipe
                    </Button>
                    <Button 
                      icon={<Plus className="w-4 h-4" />} 
                      variant="primary"
                      onClick={() => setShowAddRecipe(true)}
                      size="lg"
                    >
                      Add Recipe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Input Section with Functionality */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              📝 Interactive Forms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search Input */}
              <Card variant="elevated">
                <CardHeader 
                  title="🔍 Recipe Search" 
                  subtitle="Find your favorite recipes instantly"
                />
                <CardContent>
                  <Input
                    label="Search Recipes"
                    placeholder="Try 'chocolate', 'pasta', 'healthy'..."
                    leftIcon={<Search className="w-4 h-4" />}
                    value={formData.search}
                    onChange={(e) => {
                      setFormData({...formData, search: e.target.value});
                      console.log('Searching for:', e.target.value);
                    }}
                    helperText={formData.search ? `Searching for "${formData.search}"` : "Type to search recipes"}
                    variant="filled"
                    inputSize="lg"
                  />
                </CardContent>
              </Card>

              {/* Login Form */}
              <Card variant="elevated">
                <CardHeader 
                  title="👨‍🍳 Chef Login" 
                  subtitle="Access your recipe collection"
                />
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="chef@example.com"
                      leftIcon={<Mail className="w-4 h-4" />}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      variant="filled"
                      inputSize="lg"
                    />
                    <Input
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      leftIcon={<Lock className="w-4 h-4" />}
                      rightIcon={
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      }
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      variant="filled"
                      inputSize="lg"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    fullWidth 
                    size="lg"
                    onClick={() => alert(`Logging in ${formData.email}`)}
                    disabled={!formData.email || !formData.password}
                  >
                    Sign In
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* File Upload Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">File Uploads</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader 
                  title="Recipe Photos" 
                  subtitle="Add beautiful food photos"
                />
                <CardContent>
                  <FileUpload
                    accept="image/*"
                    multiple={true}
                    maxSize={10}
                    onFilesChange={handleFileUpload}
                    label="Upload recipe photos"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader 
                  title="Cooking Videos" 
                  subtitle="Add step-by-step video tutorials"
                />
                <CardContent>
                  <FileUpload
                    accept="video/*"
                    multiple={false}
                    maxSize={100}
                    onFilesChange={handleFileUpload}
                    label="Upload cooking video"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Recipe Cards */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Recipe Collection
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card interactive>
                <CardHeader 
                  title="Beef Stir Fry"
                  subtitle="Asian • 25 mins"
                  action={<Badge variant="warning" size="sm">Medium</Badge>}
                />
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Quick and flavorful beef stir fry with fresh vegetables and savory sauce.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">👥 4 servings</span>
                    <span className="font-medium text-emerald-600">⭐ 4.7</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRecipe('Beef Stir Fry');
                      }}
                      icon={<Heart className="w-4 h-4" />}
                    />
                    <Button 
                      size="sm" 
                      fullWidth
                      onClick={() => alert('Starting Beef Stir Fry recipe!')}
                    >
                      Start Cooking
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card interactive>
                <CardHeader 
                  title="Lemon Bars"
                  subtitle="Dessert • 60 mins"
                  action={<Badge variant="info" size="sm">Trending</Badge>}
                />
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Tangy and sweet lemon bars with buttery shortbread crust. A crowd favorite!
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">👥 12 servings</span>
                    <span className="font-medium text-emerald-600">⭐ 4.8</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Chef profile opened!');
                      }}
                      icon={<User className="w-4 h-4" />}
                    />
                    <Button 
                      size="sm" 
                      fullWidth
                      onClick={() => alert('Opening Lemon Bars recipe!')}
                    >
                      View Recipe
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card variant="outlined">
                <CardHeader title="Upload Your Recipe" subtitle="Share your creation" />
                <CardContent>
                  <div className="space-y-4">
                    <FileUpload
                      variant="compact"
                      accept="image/*"
                      multiple={false}
                      maxSize={5}
                      onFilesChange={(files) => {
                        if (files.length > 0) {
                          alert(`Photo "${files[0].name}" ready to upload!`);
                        }
                      }}
                      label="Add recipe photo"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" fullWidth>
                        <Camera className="w-4 h-4" />
                        Take Photo
                      </Button>
                      <Button size="sm" variant="outline" fullWidth>
                        <Video className="w-4 h-4" />
                        Record Video
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" fullWidth size="sm">
                    <Plus className="w-4 h-4" />
                    Create Recipe
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Component Showcase */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Component Showcase
            </h2>
            
            {/* Badge Examples */}
            <Card className="mb-6">
              <CardHeader title="Recipe Status Badges" />
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Recipe Types</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="success">Vegetarian</Badge>
                      <Badge variant="info">Quick Meal</Badge>
                      <Badge variant="warning">Spicy</Badge>
                      <Badge variant="danger">Contains Nuts</Badge>
                      <Badge variant="default">Traditional</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Status Indicators</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge dot variant="success" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Ready to Cook</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge dot variant="warning" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Missing Ingredients</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge dot variant="danger" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Out of Season</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loading States */}
            <Card>
              <CardHeader title="Loading States" />
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Spinner Sizes</h4>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <LoadingSpinner size="sm" />
                        <p className="text-xs text-gray-500 mt-2">Small</p>
                      </div>
                      <div className="text-center">
                        <LoadingSpinner size="md" />
                        <p className="text-xs text-gray-500 mt-2">Medium</p>
                      </div>
                      <div className="text-center">
                        <LoadingSpinner size="lg" />
                        <p className="text-xs text-gray-500 mt-2">Large</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">With Text</h4>
                    <div className="space-y-4">
                      <LoadingSpinner text="Loading recipes..." centered />
                      <LoadingSpinner 
                        text="Saving changes..." 
                        size="lg" 
                        color="primary" 
                        centered 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center space-y-2">
            <p className="text-gray-500 dark:text-gray-400">
              Prep Chef UI Components v0.1.0
            </p>
            <p className="text-sm text-gray-400">
              Interactive component library for recipe management
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<ComponentDemo />);
}