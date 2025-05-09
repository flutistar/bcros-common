import type { DocumentRequestIF } from '~/interfaces/request-interfaces'

export interface DocumentStateIF {
  // Document Search
  searchResultCount: number
  searchDocumentId: string
  searchEntityId: string
  searchDocument: string
  searchDocumentClass: string
  searchDocumentType: string
  searchDateRange: {
    start: Date | null
    end: Date | null
  }
  searchDescription: string
  pageNumber: number
  sortBy: {
    column: string | null
    ascending: boolean
  }

  // Document Meta
  consumerDocumentId: string
  consumerIdentifier: string
  noIdCheckbox: boolean
  noDocIdCheckbox: boolean
  documentClass: string
  documentType: string
  description: string
  consumerFilingDate: string
  documentList: Array<any>
  // New uploaded document list on edit screen.
  uploadedDocumentList: Array<any>
  scanningDetails: ScanningDetailIF | null
  scanningDetailsSnapshot: ScanningDetailIF | null

  // Validations
  validateIndex: boolean
  validateRecordEdit: boolean
  isLoading: boolean
  validateDocumentSearch: boolean
  isValidDocId: boolean

  // Document Review
  displayDocumentReview: boolean
  documentInfoRO: DocumentInfoIF | null
  documentSearchResults: DocumentRequestIF[]
  documentRecord: DocumentInfoIF | null
  documentRecordSnapshot: DocumentInfoIF | null

  // Document Editing
  isEditing: boolean
  isEditingReview: boolean

  // Error Handling
  isError: boolean
  errorMsg: Array<string>
}

export interface DocumentDetailIF {
  type: string
  description: string
  productCode: string
}

export interface DocumentClassIF {
  class: string
  description: string
  prefixes: Array<string>
  documents: Array<DocumentDetailIF>
}

export interface DocumentInfoIF {
  consumerDocumentId: string
  consumerFilename: string
  consumerFilingDateTime: string
  consumerIdentifier: string
  createDateTime: string
  documentClass: string
  documentServiceId: string
  documentServiceIds: Array<string>
  documentType: string
  documentTypeDescription?: string
  documentDescription: string
  documentURL: string
  filenames: Array<string>
  consumerFilenames?: Array<string>
  documentUrls?: Array<string>
  documentList?: Array<any>
  description?: string
}

// Scanning properties
export interface ScanningDetailIF {
  scanDateTime: string
  accessionNumber: string
  batchId: string
  pageCount: number
  author: string
}