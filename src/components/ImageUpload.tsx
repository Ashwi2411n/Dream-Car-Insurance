import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, Camera, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  status: "uploading" | "uploaded" | "analyzing" | "analyzed";
}

const ImageUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  }, []);

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      toast({
        title: "Invalid file type",
        description: "Please upload only image files",
        variant: "destructive",
      });
    }

    imageFiles.forEach(file => {
      const id = Math.random().toString(36).substr(2, 9);
      const preview = URL.createObjectURL(file);
      
      const newFile: UploadedFile = {
        id,
        file,
        preview,
        status: "uploading"
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload and analysis
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => f.id === id ? { ...f, status: "uploaded" } : f)
        );
        
        setTimeout(() => {
          setUploadedFiles(prev => 
            prev.map(f => f.id === id ? { ...f, status: "analyzing" } : f)
          );
          
          setTimeout(() => {
            setUploadedFiles(prev => 
              prev.map(f => f.id === id ? { ...f, status: "analyzed" } : f)
            );
          }, 2000);
        }, 500);
      }, 1000);
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const getStatusIcon = (status: UploadedFile["status"]) => {
    switch (status) {
      case "uploading":
        return <div className="animate-spin h-4 w-4 border-2 border-insurance-blue border-t-transparent rounded-full" />;
      case "uploaded":
        return <CheckCircle2 className="h-4 w-4 text-trust-green" />;
      case "analyzing":
        return <div className="animate-pulse h-4 w-4 bg-warning-amber rounded-full" />;
      case "analyzed":
        return <CheckCircle2 className="h-4 w-4 text-trust-green" />;
    }
  };

  const getStatusText = (status: UploadedFile["status"]) => {
    switch (status) {
      case "uploading":
        return "Uploading...";
      case "uploaded":
        return "Uploaded";
      case "analyzing":
        return "Analyzing damage...";
      case "analyzed":
        return "Analysis complete";
    }
  };

  return (
    <section id="image-upload" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upload Damage Photos
            </h2>
            <p className="text-lg text-muted-foreground">
              Take clear photos of your vehicle's damage from multiple angles for the most accurate assessment
            </p>
          </div>

          <Card className="p-8 mb-8 bg-gradient-card shadow-medium">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                isDragging 
                  ? "border-insurance-blue bg-insurance-blue/5" 
                  : "border-border hover:border-insurance-blue/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-insurance-blue/10 p-6 rounded-full">
                  <Upload className="h-12 w-12 text-insurance-blue" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Drop your photos here or click to browse
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Supports JPG, PNG, and WEBP files up to 10MB each
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="premium" size="lg" className="relative overflow-hidden">
                    <Camera className="mr-2 h-5 w-5" />
                    Choose Files
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileInput}
                    />
                  </Button>
                  <Button variant="outline" size="lg">
                    Take Photo
                  </Button>
                </div>
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Uploaded Images</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="relative group">
                      <Card className="overflow-hidden shadow-soft">
                        <div className="aspect-video relative">
                          <img
                            src={file.preview}
                            alt="Damage photo"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => removeFile(file.id)}
                            className="absolute top-2 right-2 bg-destructive text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium truncate">
                              {file.file.name}
                            </span>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(file.status)}
                              <span className="text-xs text-muted-foreground">
                                {getStatusText(file.status)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {uploadedFiles.some(f => f.status === "analyzed") && (
            <div className="text-center">
              <Button variant="success" size="lg">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                View Analysis Results
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;