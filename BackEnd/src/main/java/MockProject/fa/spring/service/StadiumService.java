package MockProject.fa.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Repository.StadiumRepository;

@Service
public class StadiumService {
	
	@Autowired
	private StadiumRepository stadiumRepository;

	public List<Stadium> getNew() {
		return stadiumRepository.findAll();
	}

//	public void addNew(NewEntity newEntity) {
//	    Optional<NewEntity> newByTitle = newRepository.findByTitleNew(newEntity.getTitleNew());
//		if (newByTitle.isPresent()) {
//			throw new IllegalStateException("Title taken");
//		}
//		newRepository.save(newEntity);
//	}

	public void deleteNew(Long newId) {
		boolean exists = stadiumRepository.existsById(newId);
		if (!exists) {
			throw new IllegalStateException("New with ID " + newId + "does not exists");
		}
		stadiumRepository.deleteById(newId);
	}

	@Transactional
	public void updateStadium(Long idStadium, String nameStadium, String address, String description) {
		Stadium stadiumEntity = stadiumRepository.findById(idStadium)
				.orElseThrow(() -> new IllegalStateException("stadium with id " + idStadium + "does not exist"));

		if (nameStadium != null && nameStadium.length() > 0) {
			stadiumEntity.setNameStadium(nameStadium);
		}

		if (address != null && address.length() > 0) {
			stadiumEntity.setAddress(address);
		}

		if (description != null && description.length() > 0) {
			stadiumEntity.setDescription(description);
		}
//		stadiumEntity.setCategory(category);
//		
//	

	}

	public ServiceResult findById(Long id) {
		ServiceResult result = new ServiceResult();
		Stadium _new = stadiumRepository.findById(id).orElse(null);
		result.setData(_new);
		return result;
	}
}



