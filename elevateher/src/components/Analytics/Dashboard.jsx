import React, { useState } from 'react';

const Dashboard = () => {
  // Mock data - in a real app, this would come from an API
  const [timeRange, setTimeRange] = useState('7d');
  
  // Sample analytics data
  const analyticsData = {
    '7d': {
      visitors: 1247,
      pageViews: 3829,
      avgTimeOnSite: '2m 34s',
      bounceRate: '42%',
      topPages: [
        { page: 'Home', views: 1502 },
        { page: 'Products', views: 843 },
        { page: 'About', views: 627 },
        { page: 'Contact', views: 412 }
      ],
      dailyVisitors: [120, 145, 165, 190, 220, 205, 202],
      deviceBreakdown: { mobile: 62, desktop: 31, tablet: 7 }
    },
    '30d': {
      visitors: 5280,
      pageViews: 16245,
      avgTimeOnSite: '2m 48s',
      bounceRate: '39%',
      topPages: [
        { page: 'Home', views: 5245 },
        { page: 'Products', views: 3621 },
        { page: 'About', views: 2504 },
        { page: 'Contact', views: 1892 }
      ],
      dailyVisitors: [
        110, 125, 145, 155, 170, 180, 185, 
        190, 205, 220, 235, 240, 245, 250, 
        240, 235, 230, 225, 220, 215, 210,
        215, 220, 225, 230, 235, 240, 235,
        230, 225
      ],
      deviceBreakdown: { mobile: 58, desktop: 34, tablet: 8 }
    },
    '90d': {
      visitors: 15720,
      pageViews: 48320,
      avgTimeOnSite: '3m 02s',
      bounceRate: '36%',
      topPages: [
        { page: 'Home', views: 15342 },
        { page: 'Products', views: 10985 },
        { page: 'About', views: 7432 },
        { page: 'Contact', views: 5124 }
      ],
      dailyVisitors: Array.from({ length: 90 }, (_, i) => 150 + Math.floor(Math.sin(i / 5) * 50 + Math.random() * 30)),
      deviceBreakdown: { mobile: 54, desktop: 38, tablet: 8 }
    }
  };
  
  const currentData = analyticsData[timeRange];
  
  // Generate labels for chart based on time range
  const getLabels = () => {
    const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
    return Array.from({ length: days }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (days - 1 - i));
      return `${d.getMonth() + 1}/${d.getDate()}`;
    });
  };
  
  // Simplified chart component (in a real app, use a library like Chart.js)
  const SimpleChart = ({ data, labels }) => {
    const max = Math.max(...data);
    
    return (
      <div className="w-full h-60 mt-4">
        <div className="flex h-52 items-end space-x-1">
          {data.map((value, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              style={{ 
                height: `${(value / max) * 100}%`,
                minWidth: timeRange === '7d' ? '20px' : '4px'
              }}
              title={`${labels[i]}: ${value} visitors`}
            ></div>
          ))}
        </div>
        
        {/* Only show labels for 7 day view to avoid overcrowding */}
        {timeRange === '7d' && (
          <div className="flex text-xs text-gray-500 space-x-1 mt-1">
            {labels.map((label, i) => (
              <div key={i} className="flex-1 text-center">{label}</div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // Pie chart for device breakdown
  const DeviceBreakdown = ({ data }) => {
    const total = Object.values(data).reduce((sum, val) => sum + val, 0);
    
    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="transparent" 
            stroke="#8B5CF6" 
            strokeWidth="20" 
            strokeDasharray={`${data.mobile * 2.51} ${100 - data.mobile * 2.51}`} 
            transform="rotate(-90, 50, 50)" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="transparent" 
            stroke="#EC4899" 
            strokeWidth="20" 
            strokeDasharray={`${data.desktop * 2.51} ${100 - data.desktop * 2.51}`} 
            transform={`rotate(${data.mobile * 3.6 - 90}, 50, 50)`} 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="transparent" 
            stroke="#F59E0B" 
            strokeWidth="20" 
            strokeDasharray={`${data.tablet * 2.51} ${100 - data.tablet * 2.51}`} 
            transform={`rotate(${(data.mobile + data.desktop) * 3.6 - 90}, 50, 50)`} 
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {total}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-800 text-white p-6">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-purple-200">Track your website performance</p>
      </div>
      
      <div className="p-6">
        {/* Time range selector */}
        <div className="flex space-x-2 mb-6">
          <button 
            onClick={() => setTimeRange('7d')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === '7d' 
                ? 'bg-purple-100 text-purple-800' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Last 7 Days
          </button>
          <button 
            onClick={() => setTimeRange('30d')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === '30d' 
                ? 'bg-purple-100 text-purple-800' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Last 30 Days
          </button>
          <button 
            onClick={() => setTimeRange('90d')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === '90d' 
                ? 'bg-purple-100 text-purple-800' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Last 90 Days
          </button>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm uppercase">Total Visitors</h3>
            <p className="text-3xl font-bold text-gray-900">{currentData.visitors.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm uppercase">Page Views</h3>
            <p className="text-3xl font-bold text-gray-900">{currentData.pageViews.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm uppercase">Avg. Time on Site</h3>
            <p className="text-3xl font-bold text-gray-900">{currentData.avgTimeOnSite}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm uppercase">Bounce Rate</h3>
            <p className="text-3xl font-bold text-gray-900">{currentData.bounceRate}</p>
          </div>
        </div>
        
        {/* Visitors chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Daily Visitors</h3>
          <SimpleChart data={currentData.dailyVisitors} labels={getLabels()} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top pages */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                    <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.topPages.map((page, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 text-sm text-gray-900">{page.page}</td>
                      <td className="py-3 px-4 text-sm text-gray-900 text-right">{page.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Device breakdown */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Device Breakdown</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <DeviceBreakdown data={currentData.deviceBreakdown} />
              
              <div className="mt-4 flex justify-center space-x-6">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
                  <span className="text-sm text-gray-600">Mobile {currentData.deviceBreakdown.mobile}%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-pink-600 mr-2"></span>
                  <span className="text-sm text-gray-600">Desktop {currentData.deviceBreakdown.desktop}%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Tablet {currentData.deviceBreakdown.tablet}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 