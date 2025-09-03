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
  LoadingSpinner
} from '../src';
import { Search, Heart, ShoppingCart, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

function ComponentDemo() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    search: ''
  });

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              🍳 Prep Chef UI Components
            </h1>
            <Button
              variant="ghost"
              onClick={toggleDarkMode}
              icon={darkMode ? '☀️' : '🌙'}
              size="sm"
            >
              {darkMode ? 'Light' : 'Dark'}
            </Button>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Interactive component library showcase
          </p>
        </div>

        <div className="space-y-12">
          {/* Buttons Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Buttons</h2>
            <div className="grid gap-6">
              {/* Button Variants */}
              <Card>
                <CardHeader title="Button Variants" />
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Button Sizes */}
              <Card>
                <CardHeader title="Button Sizes" />
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Button States */}
              <Card>
                <CardHeader title="Button States & Icons" />
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      loading={loading} 
                      onClick={handleSubmit}
                      variant="primary"
                    >
                      {loading ? 'Saving...' : 'Save Recipe'}
                    </Button>
                    <Button icon={<Heart className="w-4 h-4" />} variant="outline">
                      Like
                    </Button>
                    <Button 
                      icon={<ShoppingCart className="w-4 h-4" />} 
                      iconPosition="right"
                      variant="secondary"
                    >
                      Add to Cart
                    </Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Input Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Input Fields</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Input Variants */}
              <Card>
                <CardHeader title="Input Variants" />
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Default Input"
                      placeholder="Enter text..."
                      helperText="This is a default input"
                    />
                    <Input
                      label="Filled Input"
                      variant="filled"
                      placeholder="Filled variant"
                    />
                    <Input
                      label="Outlined Input"
                      variant="outlined"
                      placeholder="Outlined variant"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Input with Icons */}
              <Card>
                <CardHeader title="Input with Icons" />
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="chef@example.com"
                      leftIcon={<Mail className="w-4 h-4" />}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                    />
                    <Input
                      label="Search Recipes"
                      placeholder="Find your favorite dish..."
                      leftIcon={<Search className="w-4 h-4" />}
                      value={formData.search}
                      onChange={(e) => setFormData({...formData, search: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Input States */}
              <Card>
                <CardHeader title="Input States" />
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Error State"
                      placeholder="Enter email"
                      error="Please enter a valid email address"
                      value="invalid-email"
                    />
                    <Input
                      label="Disabled Input"
                      placeholder="Can't edit this"
                      disabled
                      value="Disabled content"
                    />
                    <Input
                      label="Helper Text"
                      placeholder="Username"
                      helperText="Username must be at least 3 characters"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Input Sizes */}
              <Card>
                <CardHeader title="Input Sizes" />
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Small Input"
                      inputSize="sm"
                      placeholder="Small size"
                    />
                    <Input
                      label="Medium Input (Default)"
                      inputSize="md"
                      placeholder="Medium size"
                    />
                    <Input
                      label="Large Input"
                      inputSize="lg"
                      placeholder="Large size"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Cards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Default Card */}
              <Card>
                <CardHeader title="Classic Pancakes" subtitle="Breakfast • 20 mins" />
                <CardContent>
                  <p>Fluffy, golden pancakes perfect for weekend mornings. Serve with maple syrup and fresh berries.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Save</Button>
                  <Button size="sm">View Recipe</Button>
                </CardFooter>
              </Card>

              {/* Outlined Card */}
              <Card variant="outlined" interactive>
                <CardHeader 
                  title="Pasta Carbonara" 
                  subtitle="Italian • 30 mins"
                  action={<Badge variant="success">Popular</Badge>}
                />
                <CardContent>
                  <p>Creamy pasta with crispy pancetta and parmesan cheese. A Roman classic that's surprisingly easy to make.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <Badge variant="warning" size="sm">4.8 ★</Badge>
                    <Button size="sm">Cook Now</Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Elevated Card */}
              <Card variant="elevated">
                <CardHeader title="Chocolate Cake" subtitle="Dessert • 90 mins" />
                <CardContent>
                  <p>Rich, moist chocolate cake with silky ganache frosting. Perfect for special occasions.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" fullWidth size="sm">
                    <ShoppingCart className="w-4 h-4" />
                    Get Ingredients
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Badges Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Badges</h2>
            <Card>
              <CardHeader title="Badge Variants & Sizes" />
              <CardContent>
                <div className="space-y-6">
                  {/* Variants */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Variants</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Available</Badge>
                      <Badge variant="warning">Low Stock</Badge>
                      <Badge variant="danger">Out of Stock</Badge>
                      <Badge variant="info">New Recipe</Badge>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Sizes</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge size="sm" variant="success">Small</Badge>
                      <Badge size="md" variant="success">Medium</Badge>
                      <Badge size="lg" variant="success">Large</Badge>
                    </div>
                  </div>

                  {/* Dots */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Status Dots</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge dot variant="success" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge dot variant="warning" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Busy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge dot variant="danger" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Offline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Loading Spinners */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Loading Spinners</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader title="Spinner Sizes" />
                <CardContent>
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
                    <div className="text-center">
                      <LoadingSpinner size="xl" />
                      <p className="text-xs text-gray-500 mt-2">Extra Large</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Spinner with Text" />
                <CardContent>
                  <div className="space-y-4">
                    <LoadingSpinner text="Loading recipes..." centered />
                    <LoadingSpinner 
                      text="Saving changes..." 
                      size="lg" 
                      color="primary" 
                      centered 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recipe Card Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Recipe Card Examples</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card interactive>
                <CardHeader 
                  title="Avocado Toast"
                  subtitle="Healthy • 5 mins"
                  action={
                    <div className="flex gap-1">
                      <Badge variant="success" size="sm">Vegan</Badge>
                      <Badge variant="info" size="sm">Quick</Badge>
                    </div>
                  }
                />
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Simple yet delicious avocado toast with a twist. Perfect for breakfast or a light lunch.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">👥 2 servings</span>
                    <span className="font-medium text-emerald-600">⭐ 4.9</span>
                  </div>
                </CardContent>
                <CardFooter border={false}>
                  <Button variant="outline" size="sm" fullWidth>
                    <Heart className="w-4 h-4" />
                    Save Recipe
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="elevated">
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
                  <Button size="sm" fullWidth>
                    Start Cooking
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="filled">
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
                    <Button variant="ghost" size="sm">
                      <User className="w-4 h-4" />
                    </Button>
                    <Button size="sm" fullWidth>View Recipe</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            Prep Chef UI Components v{process.env.npm_package_version || '0.1.0'}
          </p>
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