// ==========================================
// 🔐 TRAMASYS AUTH API TYPES
// ==========================================

export interface User {
    id: string;
    username: string;
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    service?: 'LETS_GO' | 'RIDE_AND_GO' | 'FLEET_MANAGEMENT' | 'SYNDICAT' | 'NAVIGOO' | 'PAYMENT' | 'FARE_CALCULATOR' | 'USER_DELETED';
    photoUri?: string;
    photoId?: string;
    roles: string[];
    permissions: string[];
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

// ==========================================
// 🏢 U-GATE : SYNDICATS & DÉTAILS
// ==========================================

export interface SyndicateDocuments {
    logoUrl: string | null;
    charteUrl: string | null;
    statusUrl: string | null;
    membersListUrl: string | null;
    commitmentCertificateUrl: string | null;
}

export interface OrganizationInfo {
    legalForm: string;
    socialNetwork: string | null;
    keywords: string;
    email: string | null;
    shortName: string | null;
    longName: string;
}

export interface CreatorInfo {
    id: string;
    fullName: string;
    email: string;
}

export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
}

export interface Syndicate {
    id: string;
    name: string;
    description: string;
    domain: string;
    type: string;
    isApproved: boolean;
    isActive: boolean;
    documents: SyndicateDocuments;
    organization: OrganizationInfo;
    creator: CreatorInfo;
    stats: SyndicateStats;
    createdAt: string;
    updatedAt: string;
    // Fallbacks pour compatibilité avec les listes simples
    logoUrl?: string;
    statusUrl?: string;
}

export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

// ==========================================
// 🛒 U-GATE : MARKETPLACE (PRODUITS & SERVICES)
// ==========================================

export interface Product {
    id: string;
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    image: string;
    isActive: boolean;
}

export interface ServiceOffering {
    id: string;
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
}

// ==========================================
// 📱 U-GATE : SOCIAL (FEED, POSTS, COMMENTS)
// ==========================================

export interface MediaInfo {
    url: string;
    type: 'IMAGE' | 'VIDEO' | 'PDF';
}

export interface Publication {
    id: string;
    branchId: string;
    authorFullName: string;
    content: string;
    createdAt: string;
    nlikes: number;
    ncomments: number;
    fileUrlAndType: MediaInfo[];
}

export interface CommentResponseDto {
    id: string;
    authorId: string;
    authorFullName: string;
    publicationId: string;
    parentId: string | null;
    imageUrl: string | null;
    content: string;
    createdAt: string;
}

export interface FeedItem {
    type: 'publication' | 'event';
    data: Publication | Event;
}

// ==========================================
// 📅 U-GATE : ÉVÉNEMENTS
// ==========================================

export interface LocalTime {
    hour: number;
    minute: number;
    second: number;
    nano: number;
}

export interface MemberResponse {
    userId: string;         // UUID de l'utilisateur
    firstName: string;      // Prénom
    lastName: string;       // Nom
    email: string;          // Email de l'utilisateur
    profileImageUrl?: string; // URL de la photo de profil (optionnel)
    role: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
    branchId: string;       // C'est cet ID qui est crucial pour filtrer vos publications/événements
    joinedAt: string;       // Date d'adhésion au format ISO string
}

export interface Event {
    id: string;
    creatorId: string;
    branchId: string;
    title: string;
    description: string;
    location: string;
    date: string;
    startTime?: LocalTime; // Ajoute le ?
    endTime?: LocalTime;
    createdAt: string;
    updatedAt: string;
    participantCount: number;
    imageUrls: string[];
}

// ==========================================
// 🗳️ U-GATE : VOTES & SONDAGES
// ==========================================

export interface VoteResultDTO {
    choiceLabel: string;
    count: number;
}

export interface PublicationVoteWithResultsDTO {
    id: string;
    title: string;
    description: string;
    closingAt: string;
    type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
    totalVotes: number;
    results: VoteResultDTO[];
    hasVoted: boolean;
}

// ==========================================
// 🛡️ U-GATE : CONFORMITÉ (COMPLIANCE)
// ==========================================

export interface OfficialProfileResponse {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl: string | null;
    cvUrl: string | null;
    cniNumber: string | null;
    cniRectoUrl: string | null;
    cniVersoUrl: string | null;
    licenseNumber: string | null;
    licenseRectoUrl: string | null;
    licenseVersoUrl: string | null;
    isVerified: boolean;
}

export interface MembershipRequest {
    id: string;
    userId: string;
    syndicatId: string;
    branchId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    motivation: string;
    rejectionReason: string | null;
    createdAt: string;
    updatedAt: string;
}

// ==========================================
// ⚙️ INTERNAL APP TYPES
// ==========================================

export type UserType = 'VISITOR' | 'MEMBER' | 'PARTNER';