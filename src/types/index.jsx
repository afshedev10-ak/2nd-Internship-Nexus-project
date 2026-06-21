export const UserRole = {
  ENTREPRENEUR: 'entrepreneur',
  INVESTOR: 'investor'
};

export const User = {
  id: '',
  name: '',
  email: '',
  role: '',
  avatarUrl: '',
  bio: '',
  isOnline: false,
  createdAt: ''
};

export const Entrepreneur = {
  ...User,
  role: 'entrepreneur',
  startupName: '',
  pitchSummary: '',
  fundingNeeded: '',
  industry: '',
  location: '',
  foundedYear: 0,
  teamSize: 0
};

export const Investor = {
  ...User,
  role: 'investor',
  investmentInterests: [],
  investmentStage: [],
  portfolioCompanies: [],
  totalInvestments: 0,
  minimumInvestment: '',
  maximumInvestment: ''
};

export const Message = {
  id: '',
  senderId: '',
  receiverId: '',
  content: '',
  timestamp: '',
  isRead: false
};

export const ChatConversation = {
  id: '',
  participants: [],
  lastMessage: null,
  updatedAt: ''
};

export const CollaborationRequest = {
  id: '',
  investorId: '',
  entrepreneurId: '',
  message: '',
  status: 'pending',
  createdAt: ''
};

export const Document = {
  id: '',
  name: '',
  type: '',
  size: '',
  lastModified: '',
  shared: false,
  url: '',
  ownerId: ''
};

