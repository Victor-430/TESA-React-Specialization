import type { STUDENTFORM } from "../types";

export const FormResult = ({data}: {data: STUDENTFORM | null}) => {
  return (
    
    <div className="card">
      <div className="card-header">
        <h2 id="modal-title">Registration Result</h2>
      </div>

      <div className="result-list">
        <div className="result-item">
          <strong>Name:</strong>
          <span>{data?.name || "-"}</span>
        </div>

        <div className="result-item">
          <strong>Email:</strong>
          <span>{data?.email || "-"}</span>
        </div>

        <div className="result-item">
          <strong>Phone Number:</strong>
          <span>{data?.phone || "-"}</span>
        </div>

        <div className="result-item">
          <strong>Specialization:</strong>
          <span>{data?.specialization || "-"}</span>
        </div>

      </div>
    </div>
  );
};
