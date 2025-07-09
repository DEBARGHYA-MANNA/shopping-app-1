'use client'

export default function Modal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-[#FFFBDE] flex items-center justify-center z-50">
            <div className="bg-[#14B8A6] rounded-lg shadow-lg p-6 w-11/12 max-w-sm">
                <h2 className="text-lg text-[1E293B] font-semibold mb-2">{title}</h2>
                <p className="mb-4 text-[#1E293B]">{message}</p>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-[#1E293B] hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-[#0D9488] text-white rounded hover:bg-[#1E293B]"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}
