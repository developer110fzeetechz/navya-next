import { features } from "@/utils/features";
import { useEffect, useState, useRef } from "react";

export default function FeaturesSection() {
    

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const imagePlaceholderRef = useRef(null);
  const[featuredData,setFeaturedData]=useState('')

  useEffect(() => {
        const featureList = document.querySelectorAll(".feature-item");
        const imagePlaceholder = document.querySelector(".image-container");

        let currentFeatureIndex = 0;
        console.log(featureList);
        function updateFeatureImage(index) {
            imagePlaceholder.innerHTML = features[index].imageCode;


            featureList.forEach(item => {
                item.querySelector("span").classList.remove("highlighted");
            });

            featureList[index].querySelector("span").classList.add("highlighted");
        }

        featureList.forEach((item, index) => {
            item.addEventListener("click", () => {
                currentFeatureIndex = index;
                updateFeatureImage(index);
            });
        });

        function autoRotateFeatures() {
            currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
            updateFeatureImage(currentFeatureIndex);
        }

        // Initial setup
        updateFeatureImage(currentFeatureIndex);
        setInterval(autoRotateFeatures, 4000);
    }, [])

  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Features Section */}
      <section class="p-6 md:order-1 order-2">
                <h1 class="text-4xl font-semibold text-gray-900 mb-6">
                    Discover <span class="text-blue-500 font-Comfortaa">NavyaEdu</span> Features
                </h1>
                <ul id="feature-list" class="space-y-4">
                    <li class="feature-item p-4 cursor-pointer" data-feature="Audio Sessions">
                        <span class="text-xl font-semibold text-gray-800">Audio Sessions</span>
                        <p class="text-sm text-gray-600 mt-1">Listen to expert-guided sessions anytime.</p>
                    </li>
                    <li class="feature-item p-4 cursor-pointer" data-feature="Video Sessions">
                        <span class="text-xl font-semibold text-gray-800">Video Sessions</span>
                        <p class="text-sm text-gray-600 mt-1">High-quality video lectures for detailed understanding.</p>
                    </li>
                    <li class="feature-item p-4 cursor-pointer" data-feature="Test Series">
                        <span class="text-xl font-semibold text-gray-800">Test Series</span>
                        <p class="text-sm text-gray-600 mt-1">Prepare for exams with our comprehensive test series.</p>
                    </li>
                    <li class="feature-item p-4 cursor-pointer" data-feature="Multilingual Options">
                        <span class="text-xl font-semibold text-gray-800">Multilingual Options</span>
                        <p class="text-sm text-gray-600 mt-1">Access content in your preferred language.</p>
                    </li>
                </ul>
            </section>
      <section
        id="image-placeholder"
        className="relative p-6 bg-transparent border-0 rounded-lg md:order-2 order-1"
      >
        <div
     
          className="image-container w-full h-64 flex justify-center items-center"
       
          
        >
          {/* Dynamic image content */}
        </div>
      </section>
    </section>
  );
}
