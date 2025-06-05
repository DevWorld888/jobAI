import React from 'react';
import { MapPin, Clock, Calendar, Share2, MessageCircle, Star, MoreHorizontal, ArrowUpRight } from 'lucide-react';

interface JobCardProps {
  company?: string;
  title?: string;
  salary?: string;
  location?: string;
  timeZone?: string;
  hoursPerWeek?: string;
  skills?: string[];
  isNew?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  company = "ConsenSys",
  title = "Project Management of Launch initiative",
  salary = "$15k",
  location = "Work from anywhere",
  timeZone = "EST only",
  hoursPerWeek = "40 hrs/week",
  skills = ["Project Management", "Web3", "Agile"],
  isNew = true
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header with company logo */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-8 text-center relative">
        <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full relative">
                <div className="absolute inset-1 bg-white rounded-full">
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Badge and Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500 mr-2">Product</span>
              {isNew && (
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                  New
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-4 truncate max-w-xs">
              {title}
            </h3>
          </div>
        </div>

        {/* Salary */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-gray-900">{salary}</span>
        </div>

        {/* Job Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>{timeZone}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{hoursPerWeek}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                skill === "Project Management" || skill === "Web3"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Star className="w-5 h-5" />
            </button>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* View Job Button */}
        <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center group">
          <span>View Job</span>
          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;