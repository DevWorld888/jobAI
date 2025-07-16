"use client"
import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, ClipboardList, Lightbulb, DollarSign, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';

// --- Helper Components ---

// Componente para el ícono de cada paso
type StepIconProps = {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  isCompleted: boolean;
  isActive: boolean;
};

const StepIcon = ({ icon, isCompleted, isActive }: StepIconProps) => {
  const IconComponent = icon;
  const iconColor = isCompleted ? 'text-white' : isActive ? 'text-indigo-600' : 'text-gray-400';
  const bgColor = isCompleted ? 'bg-indigo-600' : 'bg-white';
  return (
    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isActive ? 'border-indigo-600' : 'border-gray-300'} ${bgColor}`}>
      <IconComponent className={iconColor} size={24} />
    </div>
  );
};

// Componente para la barra de progreso
const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

// Componente para el botón con IA
type AiButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isLoading: boolean;
    children: React.ReactNode;
};

const AiButton = ({ onClick, isLoading, children }: AiButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 disabled:text-gray-400 disabled:cursor-wait transition-colors"
    >
        {isLoading ? (
            <>
                <div className="w-4 h-4 border-2 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
                Generando...
            </>
        ) : (
            <>
                <Sparkles size={16} />
                {children}
            </>
        )}
    </button>
);


// --- Form Steps ---

type JobFormData = {
  jobTitle?: string;
  company?: string;
  location?: string;
  jobType?: string;
  description?: string;
  skills?: string;
  experience?: string;
  salary?: string;
  benefits?: string;
};

type Step1Props = {
  data: JobFormData;
  setData: React.Dispatch<React.SetStateAction<JobFormData>>;
};

const Step1 = ({ data, setData }: Step1Props) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Comencemos con lo básico</h2>
    <p className="text-gray-600 mb-8">Proporciona los detalles fundamentales de la vacante.</p>
    <div className="space-y-6">
      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Título del Puesto</label>
        <input type="text" id="jobTitle" value={data.jobTitle || ''} onChange={(e) => setData({ ...data, jobTitle: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: Desarrollador Full-Stack" />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Empresa</label>
        <input type="text" id="company" value={data.company || ''} onChange={(e) => setData({ ...data, company: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: Tech Solutions Inc." />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
        <input type="text" id="location" value={data.location || ''} onChange={(e) => setData({ ...data, location: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: Ciudad de México, Remoto" />
      </div>
    </div>
  </div>
);

type Step2Props = {
  data: JobFormData;
  setData: React.Dispatch<React.SetStateAction<JobFormData>>;
  onGenerateDescription: () => void;
  isLoading: boolean;
};

const Step2 = ({ data, setData, onGenerateDescription, isLoading }: Step2Props) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Detalles del puesto</h2>
    <p className="text-gray-600 mb-8">Describe la naturaleza del trabajo y las responsabilidades.</p>
    <div className="space-y-6">
      <div>
        <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Contrato</label>
        <select id="jobType" value={data.jobType || 'Tiempo Completo'} onChange={(e) => setData({ ...data, jobType: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
          <option>Tiempo Completo</option>
          <option>Medio Tiempo</option>
          <option>Por Proyecto</option>
          <option>Freelance</option>
          <option>Prácticas</option>
        </select>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción del Puesto</label>
            {/* <AiButton onClick={onGenerateDescription} isLoading={isLoading}>
                ✨ Generar descripción con IA
            </AiButton> */}
        </div>
        <textarea id="description" value={data.description || ''} onChange={(e) => setData({ ...data, description: e.target.value })} rows={8} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Describe las responsabilidades, el equipo, la cultura de la empresa, etc. o usa el generador con IA."></textarea>
      </div>
    </div>
  </div>
);

type Step3Props = {
    data: JobFormData;
    setData: React.Dispatch<React.SetStateAction<JobFormData>>;
    onSuggestSkills: () => void;
    isLoading: boolean;
};

const Step3 = ({ data, setData, onSuggestSkills, isLoading }: Step3Props) => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Requisitos y Habilidades</h2>
        <p className="text-gray-600 mb-8">¿Qué perfil estás buscando?</p>
        <div className="space-y-6">
            <div>
                 <div className="flex justify-between items-center mb-1">
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Habilidades Clave (separadas por comas)</label>
                    <AiButton onClick={onSuggestSkills} isLoading={isLoading}>
                        ✨ Sugerir habilidades
                    </AiButton>
                </div>
                <input type="text" id="skills" value={data.skills || ''} onChange={(e) => setData({ ...data, skills: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: React, Node.js, SQL, AWS" />
            </div>
            <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Nivel de Experiencia</label>
                <select id="experience" value={data.experience || 'Sin Experiencia'} onChange={(e) => setData({ ...data, experience: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Sin Experiencia / Junior</option>
                    <option>Intermedio / Semi-Senior</option>
                    <option>Senior</option>
                    <option>Líder / Manager</option>
                </select>
            </div>
        </div>
    </div>
);

type Step4Props = {
    data: JobFormData;
    setData: React.Dispatch<React.SetStateAction<JobFormData>>;
    onSuggestBenefits: () => void;
    isLoading: boolean;
};

const Step4 = ({ data, setData, onSuggestBenefits, isLoading }: Step4Props) => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Salario y Beneficios</h2>
        <p className="text-gray-600 mb-8">La compensación es un factor clave para los candidatos.</p>
        <div className="space-y-6">
            <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">Rango Salarial (opcional)</label>
                <input type="text" id="salary" value={data.salary || ''} onChange={(e) => setData({ ...data, salary: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: $50,000 - $70,000 MXN mensuales" />
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">Beneficios (separados por comas)</label>
                    <AiButton onClick={onSuggestBenefits} isLoading={isLoading}>
                        ✨ Sugerir beneficios
                    </AiButton>
                </div>
                <input type="text" id="benefits" value={data.benefits || ''} onChange={(e) => setData({ ...data, benefits: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: Seguro de gastos médicos, 20 días de vacaciones, Horario flexible" />
            </div>
        </div>
    </div>
);

const Step5 = ({ data }: { data: JobFormData }) => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Revisa y Publica</h2>
        <p className="text-gray-600 mb-8">Asegúrate de que toda la información sea correcta antes de publicar.</p>
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg border max-h-[60vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800">{data.jobTitle}</h3>
            <p className="text-gray-600"><Building2 className="inline-block mr-2 h-4 w-4" />{data.company}</p>
            <p className="text-gray-600"><MapPin className="inline-block mr-2 h-4 w-4" />{data.location}</p>
            <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-700">Tipo de Contrato:</h4>
                <p className="text-gray-600">{data.jobType}</p>
            </div>
            <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-700">Descripción:</h4>
                <p className="text-gray-600 whitespace-pre-wrap">{data.description}</p>
            </div>
            <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-700">Habilidades:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.skills?.split(',').map(skill => skill.trim()).filter(Boolean).map((skill, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>
             <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-700">Salario:</h4>
                <p className="text-gray-600">{data.salary || 'No especificado'}</p>
            </div>
             <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-700">Beneficios:</h4>
                 <div className="flex flex-wrap gap-2 mt-2">
                    {data.benefits?.split(',').map(benefit => benefit.trim()).filter(Boolean).map((benefit, index) => (
                        <span key={index} className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">{benefit}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// --- Main App Component ---

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
      jobType: 'Tiempo Completo',
      experience: 'Sin Experiencia / Junior'
  });
  const [apiError, setApiError] = useState('');
  const [loadingStates, setLoadingStates] = useState({
      description: false,
      skills: false,
      benefits: false
  });

  // --- Gemini API Call Logic ---
  const callGeminiAPI = async (prompt, fieldToUpdate, loadingKey) => {
      setLoadingStates(prev => ({ ...prev, [loadingKey]: true }));
      setApiError('');

      try {
          const apiKey = ""; // The environment will provide the key
          const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
          
          const payload = {
              contents: [{ role: "user", parts: [{ text: prompt }] }]
          };

          const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
          });

          if (!response.ok) {
              throw new Error(`API Error: ${response.statusText}`);
          }

          const result = await response.json();
          
          if (result.candidates && result.candidates.length > 0) {
              const text = result.candidates[0].content.parts[0].text;
              setFormData(prev => ({ ...prev, [fieldToUpdate]: text.trim() }));
          } else {
              throw new Error("No se recibió contenido de la API.");
          }

      } catch (error) {
          console.error("Error calling Gemini API:", error);
          setApiError(error.message);
      } finally {
          setLoadingStates(prev => ({ ...prev, [loadingKey]: false }));
      }
  };

  const handleGenerateDescription = () => {
      if (!formData.jobTitle) {
          setApiError("Por favor, introduce un título de puesto primero.");
          return;
      }
      const prompt = `Actúa como un reclutador experto. Escribe una descripción de trabajo atractiva y profesional para el puesto de "${formData.jobTitle}" en la empresa "${formData.company || 'esta empresa'}". La descripción debe ser clara, concisa y motivadora para atraer a los mejores talentos. Incluye las siguientes secciones con formato Markdown (títulos en negrita): **Responsabilidades**, **Requisitos** y **Por qué unirte a nosotros**.`;
      callGeminiAPI(prompt, 'description', 'description');
  };

  const handleSuggestSkills = () => {
      if (!formData.jobTitle) {
          setApiError("Por favor, introduce un título de puesto primero.");
          return;
      }
      const prompt = `Para un puesto de "${formData.jobTitle}", sugiere una lista de 10 habilidades técnicas y blandas clave. Devuelve únicamente la lista de habilidades separadas por comas, sin texto introductorio ni numeración. Ejemplo: React, Liderazgo, SQL, Comunicación, Node.js, ...`;
      callGeminiAPI(prompt, 'skills', 'skills');
  };

  const handleSuggestBenefits = () => {
      if (!formData.jobTitle) {
          setApiError("Por favor, introduce un título de puesto primero.");
          return;
      }
      const prompt = `Para un puesto de "${formData.jobTitle}", sugiere una lista de 7 beneficios atractivos y comunes que una empresa podría ofrecer para ser competitiva. Devuelve únicamente la lista de beneficios separados por comas, sin texto introductorio. Ejemplo: Seguro de gastos médicos mayores, Horario flexible, Trabajo remoto, Vales de despensa, ...`;
      callGeminiAPI(prompt, 'benefits', 'benefits');
  };

  const steps = [
    { number: 1, component: Step1, icon: Briefcase, title: "Básicos" },
    { number: 2, component: Step2, icon: ClipboardList, title: "Detalles", action: handleGenerateDescription, loading: loadingStates.description },
    { number: 3, component: Step3, icon: Lightbulb, title: "Requisitos", action: handleSuggestSkills, loading: loadingStates.skills },
    { number: 4, component: Step4, icon: DollarSign, title: "Salario", action: handleSuggestBenefits, loading: loadingStates.benefits },
    { number: 5, component: Step5, icon: CheckCircle2, title: "Revisar" },
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handlePostJob = () => {
      // Custom Modal instead of alert
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.left = '0';
      modal.style.top = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
      modal.style.display = 'flex';
      modal.style.alignItems = 'center';
      modal.style.justifyContent = 'center';
      modal.style.zIndex = '1000';
      
      const modalContent = document.createElement('div');
      modalContent.style.backgroundColor = 'white';
      modalContent.style.padding = '2rem';
      modalContent.style.borderRadius = '0.5rem';
      modalContent.style.maxWidth = '500px';
      modalContent.innerHTML = `
          <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">¡Vacante publicada con éxito!</h2>
          <pre style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.25rem; white-space: pre-wrap; word-break: break-all; max-height: 300px; overflow-y: auto;">${JSON.stringify(formData, null, 2)}</pre>
          <button id="closeModalBtn" style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background-color: #4f46e5; color: white; border-radius: 0.5rem; border: none; cursor: pointer;">Cerrar</button>
      `;
      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      document.getElementById('closeModalBtn').onclick = () => {
          document.body.removeChild(modal);
          // Reset form after closing modal
          setCurrentStep(1);
          setFormData({ jobType: 'Tiempo Completo', experience: 'Sin Experiencia / Junior' });
      };
  }

  const isNextDisabled = () => {
      switch(currentStep) {
          case 1:
              return !formData.jobTitle || !formData.company || !formData.location;
          case 2:
              return !formData.description;
          case 3:
              return !formData.skills;
          default:
              return false;
      }
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <header className="w-full px-4 sm:px-8 py-4 flex justify-between items-center bg-[#171717] ">
         <div className="flex items-center gap-2">
            <Briefcase className="text-indigo-600" />
            <span className="font-bold text-xl text-white">Post a Job</span>
         </div>
        <button className="text-sm font-semibold text-white hover:bg-[#57595b] p-3 rounded-2xl">Save & Exit</button>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full">
             <p className="text-sm font-semibold text-indigo-600 mb-2">STEP {currentStep} OF {steps.length}</p>
             <CurrentStepComponent 
                data={formData} 
                setData={setFormData} 
                onGenerateDescription={handleGenerateDescription}
                onSuggestSkills={handleSuggestSkills}
                onSuggestBenefits={handleSuggestBenefits}
                isLoading={steps[currentStep - 1].loading}
             />
             {apiError && <p className="mt-4 text-sm text-red-600">{apiError}</p>}
          </div>

          <div className="hidden lg:flex w-full h-full items-center justify-center bg-indigo-50 rounded-2xl p-8">
             <div className="w-full max-w-sm flex flex-col items-center text-center">
                 {steps.map((step, index) => (
                     <React.Fragment key={step.number}>
                        <div className="flex items-center w-full">
                           <StepIcon icon={step.icon} isCompleted={currentStep > step.number} isActive={currentStep === step.number} />
                           <div className={`ml-4 transition-all duration-300 ${currentStep >= step.number ? 'opacity-100' : 'opacity-50'}`}>
                              <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                              <p className="text-gray-600 text-sm">{
                                  [
                                      "Título, empresa y ubicación.",
                                      "Tipo de contrato y descripción.",
                                      "Habilidades y experiencia.",
                                      "Rango salarial y beneficios.",
                                      "Revisa y publica la oferta."
                                  ][index]
                              }</p>
                           </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`h-12 w-0.5 ml-6 transition-all duration-300 ${currentStep > index + 1 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                        )}
                     </React.Fragment>
                 ))}
             </div>
          </div>
        </div>
      </main>

      <footer className="w-full px-4 sm:px-8 py-4 bg-[#171717] ">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            {currentStep > 1 ? (
                <button onClick={prevStep} className="font-semibold text-white hover:bg-[#57595b] flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Atrás
                </button>
            ) : (
                <div></div>
            )}

            <div className="w-1/3 hidden sm:block">
               <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
            </div>

            {currentStep < steps.length ? (
                <button onClick={nextStep} disabled={isNextDisabled()} className="px-6 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
                    Siguiente
                </button>
            ) : (
                <button onClick={handlePostJob} className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                    Publicar Vacante
                </button>
            )}
        </div>
      </footer>
    </div>
  );
}
